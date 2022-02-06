$(document).ready(onReady);

function onReady() {
    $("#plus").on('click', function)
    $("#minus").on('click', function)
    $("#times").on('click', function)
    $("#divide").on('click', function)
    $("#equals").on('click', function)
    $("#clear-input").on('click', function)   
}


//POST FUNCTION
function postMath(operator, num1, num2) {
    $.ajax({
      method: "POST",
      url: "/calculator",
      data: {
          operator: operator,
          num1: num1,
          num2: num2
    }})
      .then(function (response) {
        console.log("Look at us now! HOORAH", response);
        $("#first-number-input").val("");
        $("#second-number-input").val("");
        getMath(); // to refresh the DOM
      })
      .catch(function () {
        console.log("UGHHHHH", response);
      });
  }

// GET FUNCTION
// function getMath() {
//     $.ajax({
//       method: "GET",
//       url: "/calculator",
//     })