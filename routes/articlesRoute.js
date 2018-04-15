/* Filename: articlesRoute.js
 * Description: This file is called by the server with the /articles route
 * On getting '/' it renders the articles page,
 * on '/displayArticles' it calls the function to display all the articles.
 */

var express = require('express');
var router = express.Router();
var articlesController = require('../controllers/articlesController');

// about page
router.get('/', function(req, res) {
    res.render('pages/articles');
});

// display about page
router.get('/displayArticles', articlesController.displayArticles);

module.exports = router;