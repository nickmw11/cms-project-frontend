/* Filename: aboutRoute.js
 * Description: This file is called by the server with the /about route
 * On getting '/' it renders the about page,
 * on '/displayAbout' it calls the function from
 * the aboutController to display the about information.
 */

var express = require('express');
var router = express.Router();
var aboutController = require('../controllers/aboutController');

// about page
router.get('/', function(req, res) {
    res.render('pages/about');
});

// display about page
router.get('/displayAbout', aboutController.displayAbout);

module.exports = router;