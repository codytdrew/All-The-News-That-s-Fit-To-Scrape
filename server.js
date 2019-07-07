// Dependencies
var express = require("express");
var exhbs = require('express-handlebars');
var bodyParser = require('body-parser');
var logger = require("morgan");
var mongoose = require("mongoose");
var axios = require('axios');
var db = require("./models"); // Require all models
var cheerio = require('cheerio');

//initialize express
var app = express();
var PORT = process.env.PORT || 3000;

//use body parser and middle ware logger morgan
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', exhbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect("mongodb://localhost/mongoHeadlines");
var db = ("./models");

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://JohnJohn:Florence0609!@ds247827.mlab.com:47827/heroku_66jjtz6s",
{
    useMongoClient: true
}
    );

    require("./articlesController.js")(app);

    app.listen(PORT, function() {
        console.log("Listening on http://localhost:"+ PORT)
    });