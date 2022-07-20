// Select elements
let pChoiceDisplay = document.getElementById("pchoice");
let cChoiceDisplay = document.getElementById("cresult");
let choices = document.querySelectorAll("img");
let pScoreDisplay = document.getElementById("scorep");
let cScoreDisplay = document.getElementById("scorec");
let winnerDisplay = document.getElementById("winner");
const restartButton = document.querySelector(".here");

const possibleChoice = ["Rock", "Paper", "Scissors"];

// let userChoice;
// let result;
// let compChoiceDisplay;
let pScore = 0;
let cScore = 0;
let running = true;

restartButton.addEventListener("click", function () {
  location.reload();
});

for (i of choices) {
  i.addEventListener("click", function (e) {
    if (running) {
      console.log(e.target.id);
      pChoiceDisplay.textContent = e.target.id;
      computerChoice();
      testWinner();
      checkWinner();
    }
  });
}

function playerWon() {
  winnerDisplay.textContent = "Player won";
  pScore++;
  pScoreDisplay.textContent = pScore;
  pChoiceDisplay.textContent = pChoiceDisplay.textContent;
  checkWinner();
}

function computerWon() {
  cScore++;
  cScoreDisplay.textContent = cScore;
  winnerDisplay.textContent = "The computer won";
}

function checkWinner() {
  if (cScore === 5) {
    running = false;
    winnerDisplay.textContent = "The Computer Has Won The Game!";
    pChoiceDisplay.textContent = "";
    cChoiceDisplay.textContent = "";
  } else if (pScore === 5) {
    running = false;
    winnerDisplay.textContent = "The Player Has Won The Game!";
    running = false;
    pChoiceDisplay.textContent = "";
    cChoiceDisplay.textContent = "";
  }
}

//Generate Computer Choice

function computerChoice() {
  let cChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
  cChoiceDisplay.textContent = cChoice;
  console.log("computer choice " + cChoice);
}

function testWinner() {
  if (cChoiceDisplay.textContent === pChoiceDisplay.textContent) {
    winnerDisplay.textContent = "Round was a tie!";
  } else if (cChoiceDisplay.textContent === "Rock" && pChoiceDisplay.textContent === "Paper") {
    playerWon();
  } else if (cChoiceDisplay.textContent === "Rock" && pChoiceDisplay.textContent === "Scissors") {
    computerWon();
  } else if (cChoiceDisplay.textContent === "Paper" && pChoiceDisplay.textContent === "Scissors") {
    playerWon();
  } else if (cChoiceDisplay.textContent === "Paper" && pChoiceDisplay.textContent === "Rock") {
    computerWon();
  } else if (cChoiceDisplay.textContent === "Scissors" && pChoiceDisplay.textContent === "Paper") {
    computerWon();
  } else if (cChoiceDisplay.textContent === "Scissors" && pChoiceDisplay.textContent === "Rock") {
    playerWon();
  }
}
