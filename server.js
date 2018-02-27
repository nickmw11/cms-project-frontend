// server.js
// load the things we need
var express = require('express');
var app = express();

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

app.listen(3001);
console.log('3001 is the magic port');