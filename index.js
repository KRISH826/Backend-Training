/** @format */
const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/", (req, res) => {
  res.send("hello api");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
