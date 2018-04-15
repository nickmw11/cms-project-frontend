/* Filename: jobPostingsRoute.js
 * Description: This file is called by the server with the /jobPostings route
 * On getting '/' it renders the jobPostings page,
 * on '/submitJobPosting' it calls the function to display all the jobPostings.
 */

var express = require('express');
var router = express.Router();
var jobPostingController = require('../controllers/jobPostingsController');

// about page
router.get('/', function(req, res) {
    res.render('pages/jobPostings');
});

// display about page
router.get('/submitJobPosting', jobPostingController.displayJobPostings);

module.exports = router;