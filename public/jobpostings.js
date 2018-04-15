/* Filename: jobPostings.js
 * Description: This file updates the articles page every 3 seconds, displaying all the jobPostings in the database.
 */

/* This function includes an initial call to loadJobPostings, and then
 * calls it every 3 seconds
 */
$(document).ready(function() {
    loadJobPostings();
});

/* This function creates the xhttp request "/jobPostings/submitJobPosting" and sends it to the server.
 * The response text is put into a div with id="jobpostings"
 */
function loadJobPostings() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("jobpostings").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "/jobPostings/submitJobPosting", true);
    xhttp.send();
}
