const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);

module.exports = app;
