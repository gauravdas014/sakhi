const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, Welcome to our API");
});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

module.exports = app;
