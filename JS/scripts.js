//BUSINESS LOGIC
const add = function(number1, number2) {
  return number1 + number2;
};
const subtract = function(number1, number2) {
  return number1 - number2;
}

const multiply = function(number1, number2) {
  return number1 * number2;
}
const divide = function(number1, number2) {
  return number1 / number2;
};


//USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    const operator = $("input:radio[name=operator]:checked").val();

    const result = "";

    if(operator === "add") {
      result = add(number1, number2);
      return result;
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else {
      result = divide(number1, number2);
    }

    $("#output").text(result);
  });
});
