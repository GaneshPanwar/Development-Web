
// // Add
// function add(num1, num2) {
//   return num1 + num2;
// }

// // Subtract
// function subtract(num1, num2) {
//   return num1 - num2;
// }

// // Multiply
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// // Divide
// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2 , operator){
//   return operator(num1, num2);
// }

// document.querySelector("input.submit").addEventListener("click", submit);

// var input = document.getElementById("num1");
// var myValue = "ganesh";
// input.value = myValue;
// var myFunction = function (e){
//   console.log(e.value);
// }

// function submit(){
//   myFunction();
// }

function display(val){
  document.getElementById("result").value +=val;
}

function calculate(){
  try{
    document.getElementById("result").value = eval(document.getElementById("result").value);
  }
  catch(err){
    document.getElementById("result").value = "Error";
  }
}

function clearScreen(){
  document.getElementById("result").value = "";
}