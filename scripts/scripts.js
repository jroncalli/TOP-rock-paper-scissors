// Select elements
const playerChoice = document.getElementById("pchoice");
const compResult = document.getElementById("cresult");
const choices = document.querySelectorAll("img");
const pScoreDisplay = document.getElementById("scorep");
const cScoreDisplay = document.getElementById("scorec");
const winnerDisplay = document.getElementById("winner");

const possibleChoice = ["Rock", "Paper", "Scissors"];

let userChoice;
let result;
let compChoice;
let pScore = 0;
let cScore = 0;

//Generate Computer Choice

const computerChoice = function () {
  compChoice = possibleChoice[Math.floor(Math.random() * possibleChoice.length)];
  compResult.textContent = compChoice;
};

choices.forEach((choices) => {
  choices.addEventListener("click", function (e) {
    console.log(e.target.id);
    userChoice = e.target.id;
    playerChoice.textContent = userChoice;
    computerChoice();

    // TODO move to checkwinner function
    if (userChoice == compChoice) {
      winnerDisplay.textContent = "Tie Game";
    } else if (userChoice == "Rock")
      if (compChoice == "Paper") {
        winnerDisplay.textContent = "Computer Won";
        cScore++;
        cScoreDisplay.textContent = cScore;
        checkWinner();
      }
  });
});

// Check for winner
function checkWinner() {}
