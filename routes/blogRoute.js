/* Filename: blogRoute.js
 * Description: This file is called by the server with the /blog route
 * On getting '/' it renders the blog page,
 * on '/displayBlog' it calls the function to display all the blog posts.
 */

var express = require('express');
var router = express.Router();
var blogController= require('../controllers/blogController');

// blog page
router.get('/', function(req, res) {
    res.render('pages/blog');
});

// display blogs
router.get('/displayBlog', blogController.displayBlog);

module.exports = router;