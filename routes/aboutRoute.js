var express = require('express');
var router = express.Router();
var aboutController= require('../controllers/aboutController');

// about page
router.get('/', function(req, res) {
    res.render('pages/about');
});

// display about page
router.get('/displayAbout', aboutController.displayAbout);

module.exports = router;