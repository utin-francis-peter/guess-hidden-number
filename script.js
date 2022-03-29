"use strict";

// Retrieving all required elements and storing into respetive variables
const hiddenNumber = document.querySelector(".number");
const feedback = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const check = document.querySelector(".check");

let randomNumber = Math.trunc(Math.random() * 10) + 1; //Generates random number and store into variable
// Variables below are used to manipulate the scores and highscores
let UserScore = 20;
let highScore = 0;

console.log(randomNumber);

// EVENT HANDLER FUNCTION BODY
const guessChecker = function () {
	const guess = Number(document.querySelector(".guess").value);

	// Stating conditions for correct guess and wrong guess
	if (guess === randomNumber) {
		feedback.textContent = "Correct Guess";
		hiddenNumber.textContent = guess;
		// Checks if the Score at which user got the guess right is higher or lower that the current highscore. If condition is met, update highscore.
		if (UserScore > highScore) {
			highscore.textContent = UserScore; //Updates highScore
		}

		// Action to be taken if guess is wrong
	} else if (guess !== randomNumber) {
		UserScore--; //reduces userScore by 1
		score.textContent = UserScore;

		// Feedback to user if guess is either too high or too low
		guess > randomNumber
			? (feedback.textContent = "Guess too high!")
			: (feedback.textContent = "Guess too low!");

		// Action to be taken if user score reduces to 0
		if (UserScore === 0) {
			feedback.textContent = "Game Over, Press Esc key to restart.";
		}
	}
};

// ESC KEY EVENT HANDLER FUNCTION
const escHandler = function (e) {
	const guess = document.querySelector(".guess");

	// Defining actions to be taken when 'Escape' key is pressed
	if (e.key === "Escape") {
		feedback.textContent = "Start Guessing...";
		hiddenNumber.textContent = "?";
		score.textContent = 20;
		guess.value = "";
	}
};

check.addEventListener("click", guessChecker);
document.addEventListener("keydown", escHandler);
