var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");
var resetButton = document.getElementById("reset");
var playerOneTotal = document.getElementById("playerOneTotal");
var playerTwoTotal = document.getElementById("playerTwoTotal");
var input = document.querySelector("input");
var h3Score = document.querySelector("h3 span");
var h3 = document.querySelector("h3");
var scoreOne = 0;
var scoreTwo = 0;
var gameOver = false;
var winningScore = 5;

// Player One score increment /////////////////////
playerOne.addEventListener("click", function() {
	if(!gameOver) {
		scoreOne++;
		if(scoreOne === winningScore) {
			playerOneTotal.classList.add("winner");
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
			playerTwoTotal.classList.add("winner");
			gameOver = true;
		}
		playerTwoTotal.textContent = scoreTwo;
	}
});

// Reset Values ///////////////////////////////////
function reset() {
	scoreOne = 0;
	scoreTwo = 0;
	playerOneTotal.textContent = 0;
	playerTwoTotal.textContent = 0;
	playerOneTotal.classList.remove("winner");
	playerTwoTotal.classList.remove("winner");
	gameOver = false;
}

// Reset scores to zero ///////////////////////////
resetButton.addEventListener("click", function() {
	reset();
});

// Adjust Score Limit /////////////////////////////
input.addEventListener("change", function() {
	h3Score.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});






































