$(document).ready(onReady);

function onReady() {
    $("#plus").on('click', function)
    $("#minus").on('click', function)
    $("#times").on('click', function)
    $("#divide").on('click', function)
    $("#equals").on('click', function)
    $("#clear-input").on('click', function)   
}



// function name(params) {
    
// }

//POST FUNCTION
function postMath() {
    $.ajax({
      method: "POST",
      url: "/calculator",
      data: {
    })
      .then(function (response) {
        console.log("Look at us now! HOORAH", response);
        $("#first-number-input").val("");
        $("#second-number-input").val("");
        getMath(); // to refresh the DOM w/ the new quote
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