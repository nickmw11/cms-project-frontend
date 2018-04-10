// Calls the function loadArticles
$(document).ready(function() {
    loadjobpostings();
});

// call to node server
function loadjobpostings() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("jobpostings").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "/jobpostingsubmit", true);
    xhttp.send();
}
