/* Filename: aboutController.js
 * Description: This file creates a query selecting all objects from the about table in the database.
 * It formats them, putting them into resultString, and then sends resultString as the response.
 */

var mysqlConnect = require('../config/database.js');

exports.displayAbout = function(req, res){
    var query = "Select * from about"
    var aboutArray = [];

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;

        // Pulls from about table on the database
        numRows = result.length;

        for (i = numRows - 1; i >= 0; i--) {
            if(result[i].is_active == 1) {
                aboutArray.push({ name: result[i].staff_name, bio: result[i].staff_bio, image: result[i].staff_image });
            }
        }
        res.render('displays/aboutDisplay', {
            aboutArray: aboutArray
        });
    });
};