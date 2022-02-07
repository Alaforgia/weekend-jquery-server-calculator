const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

const dataStore = [];

function addition(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}
function subtraction(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

//GET
app.get("/getLastResult", (req, res) => {
  console.log("Request at /getLastResult was made", req.body);
  res.json(dataStore.slice(-1));
});
app.get("/getHistory", (req, res) => {
  console.log("Request at /getHistory was made", req.body);
  res.json(dataStore);
});
//POST
app.post("/calculator", (req, res) => {
  console.log("req.body from post", req.body);
  let result = null;
  switch (req.body.operator) {
    case "+":
      result = addition(req.body.num1, req.body.num2);
      break;
    case "-":
      result = subtraction(req.body.num1, req.body.num2);
      break;
    case "*":
      result = multiply(req.body.num1, req.body.num2);
      break;
    case "/":
      result = divide(req.body.num1, req.body.num2);
      break;
  }
  dataStore.push({
    operator: req.body.operator,
    num1: req.body.num1,
    num2: req.body.num2,
    result: result,
  });
  res.json(result);
});
// PORT LISTEN
app.listen(port, () => {
  console.log("listening on port", port);
});
