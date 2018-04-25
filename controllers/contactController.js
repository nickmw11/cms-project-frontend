/* Filename: contactController.js
 * Description: This file creates a query inserting the form input
 * for a contact us message into the contactus table in the database.
 */

var mysqlConnect = require('../config/database.js');

exports.submitMessage = function(req, res){
    // Assigning the body to variable names
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var phone = req.body.phone;
    var subject = req.body.subject;
    var body = req.body.messagebody;

    // Replacing single quotes with 2 single quotes so that the sql won't have syntax errors
    firstname = subject.replace(/'/g,"''");
    lastname = subject.replace(/'/g,"''");
    subject = subject.replace(/'/g,"''");
    body = body.replace(/'/g,"''");

    var query = "INSERT INTO contactus (first_name,last_name,email,phone,subject_of_message,body_of_message) VALUES ('" + firstname+ "','" + lastname + "','" + email + "','" + phone + "','" + subject + "','" + body + "');";
    mysqlConnect.query(query, function (err, result, fields) {
        if (err) throw err;
    });

    res.render('pages/thanks');
};