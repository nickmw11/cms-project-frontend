/* Filename: server.js
 * Description: This is the server file for the frontend site.
 * This file requires many of the needed npm packages and
 * deals with the routing.
 */
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var path = require('path');

// mysql connection
var mysqlConnect = require('./config/database.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set up body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// requiring routes
var index = require('./routes/indexRoute')
var blog = require('./routes/blogRoute');
var about = require('./routes/aboutRoute');
var articles = require('./routes/articlesRoute');
var contact = require('./routes/contactRoute');
var jobPostings = require('./routes/jobPostingsRoute');

// using routes
app.use('/', index)
app.use('/blog', blog);
app.use('/about', about);
app.use('/articles', articles);
app.use('/contact', contact);
app.use('/jobPostings', jobPostings);

app.listen(3001);
console.log('Listening on port 3001');
