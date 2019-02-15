var express = require("express");
var app = express();

app.use(express.static(__dirname + "/views"));

app.get("/", function(req, res) {
    res.sendFile("index.html");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/about.html");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/skills.html");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3000, function() {
    console.log("YOU ARE LISTENING TO PORT 3000...");
});

// Index.html - develop out so it looks good
// About.html - biography about you
// Contant.html - contact information
// Skills.html - list of skills