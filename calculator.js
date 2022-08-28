const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Answer is " + result);
});
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator.html", function (req, res) {
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = weight / (height * 2);
  res.send("Answer is " + bmi);
});

app.listen(3000, function () {
  console.log("Server Started on local host 3000");
});