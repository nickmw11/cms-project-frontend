var mysqlConnect = require('../config/database.js');

exports.displayBlog = function(req, res){
    var query = "Select * from Blog"
    var resultString = "";

    mysqlConnect.query(query, function (err, result, fields) {
            if (err) throw err;

            // Pulls info from blog database table

            numRows = result.length;
            var blogArray = [];
            for (i = numRows - 1; i >= 0; i--) {
            resultString = resultString + "<div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-8\"><h2>" + result[i].Title + "</h2><h3>" + "Author: " + result[i].Author + "</h3>" + '<p>' + result[i].Content + '</p>' + result[i].Date + '</div><div class="col-sm-4"><img src="test.png" width="175" height="175"></div></div></div><br><br>';
        }
            res.send(resultString);
        });
};