

// Using Function
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked!");
// }

// // Using Anonymous Function
// document.querySelector("button").addEventListener("click", function (){
//   alert("I got Clicked");
//   // What to do when click detected
// }); 


// Add To All Buttons

function handleClick() {
  // alert("I got Clicked");
  // var audio  = new Audio("sounds/tom-1.mp3"); 
  // audio.play();

  this.style.color = "white";
}

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}