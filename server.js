// server.js
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');
var path = require('path');

// mysql connection
var mysqlConnect = require('./config/database.js');

// set up body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// requiring routes
var index = require('./routes/indexRoute')
var blog = require('./routes/blogRoute');
var about = require('./routes/aboutRoute');
var articles = require('./routes/articlesRoute');

// using routes
app.use('/', index)
app.use('/blog', blog);
app.use('/about', about);
app.use('/articles', articles);

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// contact us page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

// job postings page
app.get('/jobpostings', function(req, res) {
    res.render('pages/jobpostings');
});

//Sends a reply and the job posting
app.get('/jobpostingsubmit', function(req, res) {
    var query = "Select * from jobpostings"
    var resultString = "";

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;

        /* This now pulls all info from the articles table and has the start of formatting.  It's a kind of messy way of doing it and still needs some work. -Nick */

        numRows = result.length;
        var jobpostingsArray = [];
        for (i = numRows - 1; i >= 0; i--) {
        resultString = resultString + "<h2>" + result[i].Title + "</h2><h3>" + "Description: " + result[i].Description + "</h3>" + '<p>' + "Requirements: " + result[i].Require + '</p>' + '<br>';
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
