/* Filename: articlesController.js
 * Description: This file creates a query selecting all articles from the articles table in the database.
 * It formats them, putting them into resultString, and then sends resultString as the response.
 */

var mysqlConnect = require('../config/database.js');
var request = require('request');
var fs = require('fs');
var http = require('http');
const { URL } = require('url');
            //  This function downloads the necessary images from the back end site
              function downloadFile (imageName){

                var file = fs.createWriteStream("public/" + imageName);
                var req = http.get("http://localhost:3000/" + imageName, function(res) {
                  res.pipe(file);
              });
              }

exports.displayArticles = function (req, res){
    var query = "Select * from articles"
    var articleArray = [];

    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;
        numRows = result.length;

        for (i = numRows - 1; i >= 0; i--) {
            console.log(result[i].image);
            if(result[i].is_active == 1)
            {
                if (!fs.existsSync('./public/' + result[i].image))
                {
                    downloadFile(result[i].image);
                    console.log("Downloading " + result[i].image);
                }
                articleArray.push({ title: result[i].title, author: result[i].author, content: result[i].content, date: result[i].date, image: result[i].image });
            }
        }
        res.render('displays/articleDisplay', {
            articleArray: articleArray
        });
    });
}
