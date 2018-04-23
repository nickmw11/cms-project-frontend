/* Filename: aboutController.js
 * Description: This file creates a query selecting all objects from the about table in the database.
 * It formats them, putting them into resultString, and then sends resultString as the response.
 */

var mysqlConnect = require('../config/database.js');

exports.displayAbout = function(req, res){
    var query = "Select * from about"
    var resultString = "";

    mysqlConnect.query(query, function (err, result, fields) {
            if (err) throw err;

            // Pulls from about table on the database
            numRows = result.length;
            var aboutArray = [];
            for (i = numRows - 1; i >= 0; i--) {
                resultString = resultString + "<div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-8\"><h2>" + result[i].ID + "</h2>" + result[i].Image + "<h3>" + result[i].Name + "</h3>" + '<p>' + result[i].Bio + '</p>' + '</div><div class="col-sm-4"><img src="test.png" width="175" height="175"></div></div></div><br><br>';
        }
            res.send(resultString);
        });
};