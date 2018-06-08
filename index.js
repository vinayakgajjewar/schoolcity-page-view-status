var express = require("express");
var app = express();

var path = require("path");

app.get("/", function(request, response) {
  response.sendFile(path.join(__dirname + "/views/index.html"));
});

app.listen(3000, function() {
  console.log("Listening on 3000");
})
