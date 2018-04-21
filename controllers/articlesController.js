/* Filename: articlesController.js
 * Description: This file creates a query selecting all articles from the articles table in the database.
 * It formats them, putting them into resultString, and then sends resultString as the response.
 */

var mysqlConnect = require('../config/database.js');
var request = require('request');
var fs = require('fs');
var http = require('http');

exports.displayArticles = function (req, res){
        var query = "Select * from Articles"
        var resultString = "";

        mysqlConnect.query(query, function (err, result, fields) {
            if (err) throw err;


            numRows = result.length;
            var articleArray = [];
            for (i = numRows - 1; i >= 0; i--) {
              //  This function downloads files from the public folder on the back end, and allows them to be displayed on the front end site
              //  Currently a WIP - very slow and images won't display until this function is moved out of loop.
              //  Need to add error handling - currently front end will crash if back end isn't also running
              //  - Nick
              function downloadFile (){

                var file = fs.createWriteStream("public/" + result[i].Image);
                var req = http.get("http://localhost:3000/" + result[i].Image, function(res) {
                  res.pipe(file);
              });
              }
              // To turn on file transfer from back end to front end, uncomment below line
              // downloadFile();

                if(result[i].is_active == 1)
                {
                  console.log(result[i].Image);
                    resultString = resultString + "<div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-8\"><h2>" + result[i].Title + "</h2><h3>" + "Author: " + result[i].Author + "</h3>" + '<p>' + result[i].Content + '</p>' + result[i].Date + '</div><div class="col-sm-4"><img src="' + result[i].Image + '" width="175" height="175"></div></div></div><br><br>';
                }
            }
        res.send(resultString);
    });
}
