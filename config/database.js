/* Filename: database.js
 * Description: Contains the url to the database and creates a connection.
 */

var mysql = require('mysql');
var url = 'mysql://sql9229224:6m2d4QZdzj@sql9.freesqldatabase.com:3306/sql9229224'

var connection = mysql.createConnection(url);

connection.connect(function(err){
    if(err)throw err;
})

module.exports = connection;