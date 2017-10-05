var input = document.querySelector("input");
var scoreLimit = document.getElementById("scoreLimit");
var scoreOne = document.getElementById('scoreOne');
scoreOne.textContent = 0;
var scoreTwo = document.getElementById('scoreTwo');
var playerOne = document.getElementById('playerOne');
var playerTwo = document.getElementById('playerTwo');
var reset = document.getElementById('reset');

// Adjust Score Limit
input.addEventListener("click", function() {
	scoreLimit.textContent = input.value;
});

// Increase Player Scores
function increaseScore() {
	if(scoreOne.textContent < scoreLimit.textContent) {
		scoreOne.textContent++;
	}
}

// Player One score increment
playerOne.addEventListener("click", increaseScore);

// Player Two score increment
playerOne.addEventListener("click", increaseScore);



































