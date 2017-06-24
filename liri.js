// var keys = require(keys.js)

// var keyList = keys.twitterKeys


if (process.argv[2] === 'movie-this') {

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var nodeArgs = process.argv;
// Grab the movieName which will always be the third node argument.
var movieName = "";

for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];




  }




}
 




var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

 var cleanMovieName = movieName.Replace("+", " ");
 console.log(cleanMovieName);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    


	console.log("Title of the movie is: " + cleanMovieName);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log(cleanMovieName + " is rated: " + JSON.parse(body).Rated);	
    console.log(cleanMovieName + " was produced in: " + JSON.parse(body).Country);
    console.log(cleanMovieName + " is filmed in: " + JSON.parse(body).Language);
    console.log("The plot of "+ cleanMovieName + " is " + JSON.parse(body).Plot);
    console.log("The actors in "+ cleanMovieName + " are " + JSON.parse(body).Actors);

  }
});

}