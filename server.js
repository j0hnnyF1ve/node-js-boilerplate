"use strict";

const express = require("express");
const exphbs  = require("express-handlebars");

const PORT = 8080;
const app = express();

// static content
app.use(express.static('public'));

// routing
app.get("/", function(req, res) {
  res.send("Hello world\n");
});


app.listen(PORT, function() {
  console.log("Running on http://localhost: " + PORT);
});
