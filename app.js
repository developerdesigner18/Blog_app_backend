const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/", (req, res) => {
  console.log("API Called!!!");
  res.send("Hello! World");
});

module.exports = app;
