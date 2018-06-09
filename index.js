var express = require("express");
var app = express();
app.set("view engine", "ejs");

var path = require("path");
var fs = require("fs");

app.use(express.static("views"));

fs.readFile("json/data.json", function(err, contents) {

  // If there is an error reading the JSON
  if (err) {
    console.log(err);
  }

  // contents is a Buffer
  // Make it a string
  var stringFileContents = contents.toString();

  // Each element is an object (a row of the table)
  var arrayFileContents = JSON.parse(stringFileContents);

  // console.log(arrayFileContents[2].page) // Should print "/"
  processArray(arrayFileContents);
});

function processArray(array) {
  // Renders the ejs
  app.get("/", function(request, response) {
    // Show index.ejs
    response.render("index.ejs", {renderData: array});
  });
}

app.listen(3000, function() {
  console.log("Listening on 3000");
})
