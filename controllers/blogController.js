/* Filename: blogController.js
 * Description: This file creates a query selecting all blogs from the Blog table in the database.
 * It formats them, putting them into object blogArray, and then renders the blogDisplay page.
 */

var mysqlConnect = require('../config/database.js');

exports.displayBlog = function(req, res){
    var query = "Select * from blog"

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;

        // Pulls info from blog database table

        numRows = result.length;
        var blogArray = [];
        for (i = numRows - 1; i >= 0; i--) {
            if(result[i].is_active == 1)
            {
                blogArray.push({ title: result[i].title, author: result[i].author, content: result[i].content, date: result[i].date });
            }
        }
        res.render('displays/blogDisplay', {
            blogArray: blogArray
        });
    });
};