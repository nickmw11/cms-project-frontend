// server.js
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require('mysql');

// connection
var mysqlConnect = mysql.createConnection({
    host: "sql9.freesqldatabase.com",
    user: "sql9229224",
    password: "6m2d4QZdzj",
    database: "sql9229224"
  });

// set up body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

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
app.get('/date', function(req, res) {
    res.send("<p>Reply to ajax call from server, updating once every second.</p>" + Date());
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
    console.log(result);
});

    res.render('pages/thanks');
});

app.listen(3001);
console.log('Listening on port 3001');