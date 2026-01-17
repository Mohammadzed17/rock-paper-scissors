const choices = ["rock", "paper", "scissors"];

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const gameresult = document.getElementById("gameresult");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("compScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(userChoice) {

    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    if (userChoice === compChoice) {
        result = "Game is Tie";
    } else {

        switch (userChoice) {
            case "rock":
                result = compChoice === "scissors" ? "You Won" : "You Lost";
                break;

            case "paper":
                result = compChoice === "rock" ? "You Won" : "You Lost";
                break;

            case "scissors":
                result = compChoice === "paper" ? "You Won" : "You Lost";
                break;
        }
    }

    gameresult.classList.remove("greenText", "redText");

    if (result === "You Won") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        gameresult.classList.add("greenText");
    }

    if (result === "You Lost") {
        computerScore++;
        compScoreDisplay.textContent = computerScore ;
        gameresult.classList.add("redText");
    }

    playerChoice.textContent = `Player : ${userChoice}`;
    computerChoice.textContent = `Computer : ${compChoice}`;
    gameresult.textContent = `Result: ${result}`;
}
