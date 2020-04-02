# LIRI Bot

### Overview

LIRI BOT will search Spotify for song info, Bands in Town for concerts, and OMDB for movies.
User can give Liri a term to search after a giving command, results will be displayed on the console and saved to a previous searches log.

### Instructions

1. Create an .env inside folder "LIRI-NODE-APP/" with the following information:

   `# Spotify API keys

   SPOTIFY*ID=\_your_spotify_id*
   SPOTIFY*SECRET=\_your_spotify_secret*`

2. Open Terminal in inside root of folder "LIRI-NODE-APP/"
3. type `node liri + (one of the following commmand ) + (The term to search)`

   - `concert-this`

   - `spotify-this-song`

   - `movie-this`

   - `do-what-it-says`

   - Example 1: node liri movie-this the matrix
   -Example 2: node liri spotify-this-song hard knock life
   -Example 3: node liri concert-this janet jackson
   -example 4: node liri do-what-it-says

### Core Logic

- USER: initiates liri.js with cmd and term arguments
- LIRI.js : converts and stores arguments to then pass to base.js module  
- Base.js : run switch for cmd then executes axios query search to appropriate database (omdb - movies, spotify - music track, band - artist ); if "do-what-it-says" is the command, read from random.txt and execute command and argument; query is done, print data to console and write to log.

### Organization

- /LIRI-NODE-APP
- node_modules/
- .env
- base.js
- keys.js
- log.txt
- random.txt
- package.json
- readme.md

##### Technologies Used

-Axios
-Spotify API
-Bands in Town
-MomentJS
-Node
-VS Code
-github
