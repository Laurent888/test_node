const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  res.send("This is the user page");
});

app.use(express.static("./src"));

console.log(__dirname);

app.listen(PORT, () => console.log("Server started on port ", PORT));
