// server.js
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

// contact us page 
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

<<<<<<< HEAD
// temporary demo page 
app.get('/demo', function(req, res) {
    res.render('pages/demo');
});

=======
>>>>>>> bacf622cfd726b195e4c7b393cac3024d5afa74a
app.listen(3001);
console.log('Listening on port 3001');