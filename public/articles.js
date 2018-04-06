// Calls the function loadArticles
$(document).ready(function() {
    loadArticles();
    setInterval("loadArticles()",3000);
});

// call to node server
function loadArticles() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("articles").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "/article", true);
    xhttp.send();
}