var input = document.querySelector("input");
var scoreLimit = document.getElementById("scoreLimit");
var scoreOne = document.getElementById('score-1');
var scoreTwo = document.getElementById('score-2');
var playerOne = document.getElementById('player-1');
var playerTwo = document.getElementById('player-2');
var reset = document.getElementById('reset');

// Adjust Score Limit
input.addEventListener("click", function() {
	scoreLimit.textContent = input.value;
});

// Reset scores to zero
reset.addEventListener("click", function() {
	scoreOne.textContent = 0;
	scoreTwo.textContent = 0;
});

// Player One score increment
playerOne.addEventListener("click", function() {
	if(scoreOne.textContent < scoreLimit.textContent) {
		scoreOne.textContent++;
		if(scoreOne.textContent === scoreLimit.textContent && scoreTwo.textContent !== scoreLimit.textContent) {
			scoreOne.style.color = "green";
		} 
	}
});

// Player Two score increment
playerTwo.addEventListener("click", function() {
	if(scoreTwo.textContent < scoreLimit.textContent) {
		scoreTwo.textContent++;
		if(scoreTwo.textContent === scoreLimit.textContent && scoreOne.textContent !== scoreLimit.textContent) {
			scoreTwo.style.color = "green";
		} 
	}
});







































