/* Filename: indexRoute.js
 * Description: This file is called by the server with the /index route
 * On getting '/' it renders the index page,
 */

var express = require('express');
var router = express.Router();

// index page
router.get('/', function(req, res) {
    res.render('pages/index');
});

module.exports = router;