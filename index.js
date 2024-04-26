const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!");
});
app.get("/yeah-boi", (req, res) => {
  res.send("I am finally connected to AWS");
});

app.listen(5000, () => {
  console.log("server running at port 5000");
});
