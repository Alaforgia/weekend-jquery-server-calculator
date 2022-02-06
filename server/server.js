const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("server/public"));

function addition(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

//GET
app.get("/calculator", (req, res) => {
  console.log("Request at /calculator was made", req.body);
});
//POST
app.post("/calculator", (req, res) => {
  console.log("req.body from post", req.body);
  let result = null;
  switch (req.body.operator) {
    case "Addition":
      result = addition(req.body.num1, req.body.num2);
      break;
    case "Subtraction":
      result = subtraction(req.body.num1, req.body.num2);
      break;
    case "Multiplication":
      result = multiply(req.body.num1, req.body.num2);
      break;
    case "Division":
      result = divide(req.body.num1, req.body.num2);
      break;
  }
  res.send(result);
});
// PORT LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
