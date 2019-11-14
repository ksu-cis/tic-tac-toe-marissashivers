// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// global variable = document = access to DOM
var currentTurn = "X";

var turnElement = document.getElementById("turn"); // get the paragraph element
turnElement.innerText = "Player " + currentTurn + "'s Turn.";
//STRING TEMPLATE: `Player ${currentTurn}'s Turn.`

// Add event listener to all squares in the board
var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", onClick);
}

function onClick(event) {
    event.preventDefault(); // keeps it from doing default, want if we are overriding (get in habit of doing it)
    event.target.innerText = currentTurn; // object that event is occuring on, equivalent to sender in C#
    nextTurn();
}

function nextTurn() {
    turnElement.innerText = "Player " + currentTurn + "'s Turn.";
}

