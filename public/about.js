// Calls the function loadBlog
$(document).ready(function() {
    loadBlog();
    setInterval("loadAbout)",3000);
});

// call to node server
function loadAbout() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("about").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "/about/displayAbout", true);
    xhttp.send();
}

// Same as the js file for articles