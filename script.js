//Creeate a node list with all the buttons that have the .choice class
const choices = document.querySelectorAll("button");

//Store the text content of the button i press in the playerSelection variable
let playerSelection = "";
choices.forEach(choice => {
        choice.addEventListener("click", getPlayerChoice);
});

function getPlayerChoice(e) {
    playerSelection = e.target.textContent.toLowerCase();
    // console.log(playerSelection);
    // getComputerChoice();
    if (playerRounds < 5 && computerRounds < 5){
        let roundResult = playRound(playerSelection, getComputerChoice());
    } else {
        document.querySelector(".message").textContent = checkForWinner(playerRounds, computerRounds)
    };
    return playerSelection;
};

//Store the computer choice in a variable using a function that makes a random choice
//from a list of predefined choices.
let computerSelection = "";
function getComputerChoice() {
    const choices = ["rock", "paper", "scrissors"];
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    return computerSelection;
}

playerRounds = 0;
computerRounds = 0;
roundOutcome = "";
let displayResult = document.querySelector(".message");

function playRound(playerSelection, computerSelection){
    let playerScore = document.querySelector(".playerScore");
    let computerScore = document.querySelector(".computerScore");
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scrissors"){
        return
    }else {
        if(playerSelection === computerSelection){
            roundOutcome = "It's a TIE!";
            displayResult.textContent = roundOutcome;
            checkForWinner(playerRounds, computerRounds);
            return roundOutcome;
        } else if (playerSelection === "rock" && computerSelection === "scrissors" || playerSelection === "scrissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
            let slicedString = playerSelection.slice(1);
            let firstLetter = playerSelection.charAt(0).toUpperCase();
            let winnerChoice = firstLetter + slicedString;
            roundOutcome = "You won! " + winnerChoice + " beats " + computerSelection + ".";
            displayResult.textContent = roundOutcome;
            playerRounds += 1;
            checkForWinner(playerRounds, computerRounds);
            playerScore.textContent = "You: " + playerRounds;
            return roundOutcome;
        } else {
            let slicedString = computerSelection.slice(1);
            let firstLetter = computerSelection.charAt(0).toUpperCase();
            let winnerChoice = firstLetter + slicedString;
            roundOutcome = "You lost! " + winnerChoice + " beats " + playerSelection + ".";
            displayResult.textContent = roundOutcome;
            computerRounds += 1;
            checkForWinner(playerRounds, computerRounds);
            computerScore.textContent = "Computer: " + computerRounds;
            checkForWinner(playerRounds, computerRounds);
            return roundOutcome;
        }
    }
};

function checkForWinner(playerScore, computerScore) {
    if (playerScore === 5){
        displayResult.textContent = "You won!";
        return "You won!";
    } else if (computerScore === 5){
        displayResult.textContent = "The computer won!";
        return "The computer won!";
    } else {
        return;
    }
};

resetPage = document.querySelector(".reset");
resetPage.addEventListener("click",() => location.reload());