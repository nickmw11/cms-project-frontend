/* Filename: contactRoute.js
 * Description: This file is called by the server with the /contact route
 * On getting '/' it renders the contact page,
 * on '/submitMessage' it calls the function to submit the form input.
 */

var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contactController');

// about page
router.get('/', function(req, res) {
    res.render('pages/contact');
});

// display about page
router.post('/submitMessage', contactController.submitMessage);

module.exports = router;