////Loaders

//Load dotenv to read and write .env
require("dotenv").config();

//Load file system to read/write txt file
var fs = require("fs");

//Load keys script
var keys = require("./keys.js");

//Load Spotify
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

//Load Axios API for Queries
var axios = require("axios");

//Load Moment for date format
var moment = require("moment");

////Functions

//Concert this query, Take artist and print concert info
function concertThis(_artist) {
  var query =
    "https://rest.bandsintown.com/artists/" +
    _artist +
    "/events?app_id=codingbootcamp";

  axios
    .get(query)
    .then(function(response) {
      // handle success

      //for loop that sends data (Name, Venue location, date) to array
      for (var i = 0; i < response.data.length; i++) {
        var info = response.data[i];

        var venueName = info.venue.name;
        var venueLocation = info.venue.city + ", " + info.venue.region;
        var date = moment(info.datetime).format("MM/DD/YYYY");
        console.log(venueName + " in " + venueLocation + " on " + date);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {});
}

//Spotify Query, take song and export
function spotifyThis(_song) {
  spotify
    .search({ type: "track", query: _song, limit: 1 })
    .then(function(response) {
      //console.log(response.tracks.items[0].artists);
      console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
      console.log("Track Name: " + _song);
      console.log("Album: " + response.tracks.items[0].album.name);
      console.log("Preview: " + response.tracks.items[0].external_urls.spotify);
    })
    .catch(function(err) {
      console.log(err);
    });
}

//OMDB query the movie title and print info
function movieThis(_movie) {
  query =
    "http://www.omdbapi.com/?t=" + _movie + "&y=&plot=short&apikey=trilogy";

  axios
    .get(query)
    .then(function(response) {
      console.log(response.data.Title);
      console.log("Year produced: " + response.data.Year);
      console.log("IMDB rating: " + response.data.imdbRating);
      console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
      console.log(response.data.Country);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors/Actresses: " + response.data.Actors);
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

//Take info from txt file and do one of the previous queries
function doWhatItSays() {
  //create intruct object
  var instruction = {
    cmd: "",
    search: ""
  };

  //Load Text and write data temp variable
  fs.readFile("random.txt", "utf8", function(error, data) {
    //Check error
    if (error) {
      return console.log(error);
    }
    //No error, read data.
    else {
      instruction.cmd = data.split(",")[0];
      instruction.search = data.split(",")[1];

      switch (instruction.cmd) {
        case "spotify-this-song":
          spotifyThis(instruction.search);
          break;
        case "concert-this":
          concertThis(instruction.search);
          break;
        case "movie-this":
          movieThis(instruction.search);
          break;
      }
    }
  });
}

//Write data to log
function writeData(_data) {}

/////Primary Function
function queryInstruction(_instruction) {
  switch (_instruction.cmd) {
    case "spotify-this-song":
      spotifyThis(instruction.search);
      break;
    case "concert-this":
      concertThis(instruction.search);
      break;
    case "movie-this":
      movieThis(instruction.search);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
  }
}

//Export to App
module.exports = queryInstruction;
