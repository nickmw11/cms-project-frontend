// Calls the function loadBlog
$(document).ready(function() {
    loadBlog();
    setInterval("loadBlog()",3000);
});

// call to node server
function loadBlog() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("blog").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "/blog", true);
    xhttp.send();
}

// Same as the js file for articles - 