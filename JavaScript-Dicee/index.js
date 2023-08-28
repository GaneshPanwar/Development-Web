// // My Method

// // For Dice 1
// // Random Number Generator Variable for Dice 1
// var dice1Random = (Math.floor(Math.random() * 6)) + 1;

// if (dice1Random === 1) {
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// } else if (dice1Random === 2) {
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// } else if (dice1Random === 3) {
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// } else if (dice1Random === 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// } else if (dice1Random === 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// } else {
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
// }

// // For Dice 2
// // Random Number Generator Variable for Dice 2
// var dice2Random = (Math.floor(Math.random() * 6)) + 1;

// if (dice2Random === 1) {
//   document.querySelector(".img2").setAttribute("src", "images/dice1.png");
// } else if (dice2Random === 2) {
//   document.querySelector(".img2").setAttribute("src", "images/dice2.png");
// } else if (dice2Random === 3) {
//   document.querySelector(".img2").setAttribute("src", "images/dice3.png");
// } else if (dice2Random === 4) {
//   document.querySelector(".img2").setAttribute("src", "images/dice4.png");
// } else if (dice2Random === 5) {
//   document.querySelector(".img2").setAttribute("src", "images/dice5.png");
// } else {
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");
// }

// // Compare Both Players Score 

// if (dice1Random > dice2Random) {
//   document.querySelector("h1").textContent ="Player 1 Wins! 🚩";
// } else if (dice1Random < dice2Random) {
//   document.querySelector("h1").textContent= "Player 2 Wins! 🚩";
// } else {
//   document.querySelector("h1").textContent="Draw Match! 🚩";
// }

// Course Method

// For Dice 1
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// For Dice 2
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// // Compare Both Players Score 

if (randomNum1 > randomNum2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}