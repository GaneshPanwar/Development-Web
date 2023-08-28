
// Add
function add(num1, num2) {
  return num1 + num2;
}

// Subtract
function subtract(num1, num2) {
  return num1 - num2;
}

// Multiply
function multiply(num1, num2) {
  return num1 * num2;
}

// Divide
function divide(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2 , operator){
  return operator(num1, num2);
}

document.querySelector("input.submit").addEventListener("click", submit);

var input = document.getElementById("num1");
var myValue = "ganesh";
input.value = myValue;
var myFunction = function (e){
  console.log(e.value);
}

function submit(){
  myFunction();
  
}