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