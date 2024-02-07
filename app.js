/** @format */
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("hello post");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
