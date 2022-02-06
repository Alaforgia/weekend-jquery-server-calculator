$(document).ready(onReady);

function onReady() {
  $("#plus").on("click", function () {
    selectOperator("+");
  });
  $("#minus").on("click", function () {
    selectOperator("-");
  });
  $("#times").on("click", function () {
    selectOperator("*");
  });
  $("#divide").on("click", function () {
    selectOperator("/");
  });
  $("#equals").on("click", function () {
    console.log(operator);
    calculate(operator, $("#first-number-input").val(), $("#second-number-input").val());
  });
  $("#clear-input").on("click", function () {
    clearInputs();
  });
  getHistory();
}
let operator = null;

function selectOperator(inputOperator) {
  console.log("Selected operator is", inputOperator);
  operator = inputOperator;
}

function clearInputs() {
  $("#first-number-input").val("");
  $("#second-number-input").val("");
}

//POST FUNCTION
function calculate(operator, num1, num2) {
  $.ajax({
    method: "POST",
    url: "/calculator",
    data: {
      operator: operator,
      num1: num1,
      num2: num2,
    },
  })
    .then(function (response) {
      console.log("Look at us now! HOORAH", response);
      $("#first-number-input").val("");
      $("#second-number-input").val("");
      getLastResult(); // to refresh the DOM
    })
    .catch(function () {
      console.log("UGHHHHH", response);
    });
}

// GET FUNCTION
function getLastResult() {
  $.ajax({
    method: "GET",
    url: "/getLastResult",
  }).then(function (response) {
    console.log("response =", response);
    $("#result").text(response[0].result);
  });
}
function getHistory() {
  $.ajax({
    method: "GET",
    url: "/getHistory",
  }).then(function (response) {
    console.log(response);
    let history = $("#history");
    let operations = response;
    console.log("operations = ", operations);
    for (const operation of operations) {
      console.log(operation);
      let currentOperation = $("<div></div>").text(
        `${operation.num1} ${operation.operator} ${operation.num2} = ${operation.result}`
      );
      history.append(currentOperation);
    }
  });
}
