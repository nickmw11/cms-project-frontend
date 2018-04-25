/* Filename: jobPostingsController.js
 * Description: This file creates a query selecting all jobPostings from the jobPostings table in the database.
 * It formats them, putting them into resultString, and then sends resultString as the response.
 */

var mysqlConnect = require('../config/database.js');

exports.displayJobPostings = function(req, res){
    var query = "Select * from jobpostings"
    var jobPostingsArray = [];

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;

        numRows = result.length;
        for (i = numRows - 1; i >= 0; i--) {
            if(result[i].is_active == 1)
            {
                jobPostingsArray.push({ title: result[i].title, description: result[i].description, requirements: result[i].requirements });
            }
        }
        res.render('displays/jobDisplay', {
            jobPostingsArray: jobPostingsArray
        });
    });
};