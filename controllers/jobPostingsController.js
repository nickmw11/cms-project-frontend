/* Filename: jobPostingsController.js
 * Description: This file creates a query selecting all jobPostings from the jobPostings table in the database.
 * It formats them, putting them into resultString, and then sends resultString as the response.
 */

var mysqlConnect = require('../config/database.js');

exports.displayJobPostings = function(req, res){
    var query = "Select * from jobpostings"
    var resultString = "";

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;

        numRows = result.length;
        var jobpostingsArray = [];
        for (i = numRows - 1; i >= 0; i--) {
            if(result[i].is_active == 1)
            {
                resultString = resultString + "<h2>" + result[i].Title + "</h2><h3>" + "Description: " + result[i].Description + "</h3>" + '<p>' + "Requirements: " + result[i].Requirements + '</p>' + '<br>';
            }
        }
        res.send(resultString);
    });
};