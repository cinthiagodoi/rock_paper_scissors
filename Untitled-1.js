const MAX_HANDS = 3;
const MAX_NUMBER_OF_GAMES = 5;
const MAX_SCORE = 5;

//generates a random number between 0 and max, 0 inclusive, max exclusive
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//emulates an opponents choice between rock, paper, and scissors
function computerPlay() {
  let handSignValue = getRandomInt(MAX_HANDS);

  if (handSignValue == 1) {
    return "rock";
  } else if (handSignValue == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//evaluates a single round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {
  let playerSelectionLowerCase = playerSelection.toLowerCase();
  switch (playerSelectionLowerCase) {
    case "rock":
      if (computerSelection === "rock") {
        return "tie";
      } else if (computerSelection === "paper") {
        return "lose";
      } else {
        return "win";
      }
      break;

    case "paper":
      if (computerSelection === "rock") {
        return "win";
      } else if (computerSelection === "paper") {
        return "tie";
      } else {
        return "lose";
      }
      break;

    case "scissors":
      if (computerSelection === "rock") {
        return "lose";
      } else if (computerSelection === "paper") {
        return "win";
      } else {
        return "tie";
      }
      break;
  }
}

let matchesLeft = MAX_NUMBER_OF_GAMES;
let playerWins = 0;
let computerWins = 0;

const matchesLeftElement = document.querySelector("#matchesLeft");
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");
const buttonsDiv = document.querySelector("#buttons");
const results = document.querySelector("#results");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", e => {
    let paragraph = document.createElement("paragraph");

    if (playerWins !== 5 && computerWins !== 5) {
      let result = playRound(e.target.id, computerPlay());

      if (result === "win") {
        paragraph.textContent = "You played " + e.target.id + " and won!";
        playerWins++;
      } else if (result === "lose") {
        paragraph.textContent = "You played " + e.target.id + " and lost!";
        computerWins++;
      } else {
        paragraph.textContent = "You played " + e.target.id + " and tied!";
      }

      playerScoreElement.textContent = "Player Score: " + playerWins;
      computerScoreElement.textContent = "Computer Score: " + computerWins;

      results.appendChild(paragraph);
      results.appendChild(document.createElement("br"));
    } else {
      if (playerWins > computerWins) {
        paragraph.textContent = "You won the game!";
      } else {
        paragraph.textContent = "You lost the game!";
      }
      results.appendChild(paragraph);
      buttonsDiv.remove();
    }
  });
});