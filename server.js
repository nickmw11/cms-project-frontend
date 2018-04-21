<<<<<<< current
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
=======
// server.js
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var path = require('path');

// mysql connection
var configDB = require('./config/database.js');
var mysqlConnect = mysql.createConnection(configDB.url);

// set up body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

// blog page
app.get('/blog', function(req, res) {
    res.render('pages/blog');
});

// articles page
app.get('/articles', function(req, res) {
    res.render('pages/articles');
});

// contact us page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// Sends a reply and the date/time object
app.get('/article', function(req, res) {
    var query = "Select * from Articles"
    var resultString = "";

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;

        /* This now pulls all info from the articles table and has the start of formatting.  It's a kind of messy way of doing it and still needs some work. -Nick */

        numRows = result.length;
        var articleArray = [];
        for (i = numRows - 1; i >= 0; i--) {
        resultString = resultString + '<div class="container"> <div class="row"> <div class="col-sm"> <h2>' + result[i].Title + "</h2><h3>" + "Author: " + result[i].Author + "</h3>" + '<p>' + result[i].Content + '</p>' + result[i].Date + '</div>' + '<div class="col-sm"> Test Content </div></div></div>';
      }
        res.send(resultString);
    });
});

app.post('/submitMessage', function(req, res, next){
    console.log(req.body);
    // Assigning the body to variable names
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var phone = req.body.phone;
    var subject = req.body.subject;
    var body = req.body.messagebody;

    // Replacing single quotes with 2 single quotes so that the sql won't have syntax errors
    subject = subject.replace(/'/g,"''");
    body = body.replace(/'/g,"''");

    var query = "INSERT INTO contactus (firstname,lastname,email,phone,subjectofmessage,bodyofmessage) VALUES ('" + firstname+ "','" + lastname + "','" + email + "','" + phone + "','" + subject + "','" + body + "');";
    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;
    });

    res.render('pages/thanks');
});

app.listen(3001);
console.log('Listening on port 3001');
>>>>>>> before discard
