var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var playerOneTotal = document.getElementById("playerOneTotal");
var playerTwoTotal = document.getElementById("playerTwoTotal");
var scoreOne = 0;
var scoreTwo = 0;
var gameOver = false;
var winningScore = 5;

var input = document.querySelector("input");
var scoreLimit = document.getElementById("scoreLimit");
var reset = document.getElementById("reset");



// Player One score increment
playerOne.addEventListener("click", function() {
	if(!gameOver) {
		scoreOne++;
		if(scoreOne === winningScore) {
			gameOver = true;
		}
		playerOneTotal.textContent = scoreOne;
	}
});

// Player Two score increment
playerTwo.addEventListener("click", function() {
	if(!gameOver) {
		scoreTwo++;
		if(scoreTwo === winningScore) {
			gameOver = true;
		}
		playerTwoTotal.textContent = scoreTwo;
	}
});


// * Need to refactor the following *****************
// Adjust Score Limit
input.addEventListener("click", function() {
	scoreLimit.textContent = Number(input.value);
});

// Reset scores to zero
reset.addEventListener("click", function() {
	scoreOne.textContent = 0;
	scoreTwo.textContent = 0;
});





































