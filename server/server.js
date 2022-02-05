const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("server/public"));

// let arithmetic = mathCalculator($("#first-number-input"), $("$second-number-input"));
 let arithmetic = {
     addition: 
 }

function mathCalculator(input) {
  if ($("#first-number-input").val() && $("$second-number-input") === Number) {
    input = 
  }
}
//GET
app.get("/calculator", (req, res) => {
  console.log("Request at /calculator was made", req.body);
});
//POST
app.post("/calculator", (req, res) => {
  console.log("req.body from post", req.body);
});
// PORT LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
