//Load dotenv to read and write .env
require("dotenv").config();

//Load keys script
var keys = require("./keys.js");

//Load Spotify
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
