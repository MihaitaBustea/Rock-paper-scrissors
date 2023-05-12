function getComputerChoice() {
    let choices = ["rock", "paper", "scrissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    let computerSelection = choices[randomIndex].toLowerCase();
    return computerSelection;
}

function getPlayerChoice() {
    let choseSomething = 0;
        while (choseSomething === 0) {
        let playerSelection = prompt("Choose your weapon. What will it be? Rock, paper or scrissors ?").toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scrissors") {
            choseSomething = 1;
            return playerSelection;
        } else {
            alert("You did not make a valid choice, please try again!");
        }
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a TIE!";
    } else if (playerSelection === "rock" && computerSelection === "scrissors" || playerSelection === "scrissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        let slicedString = playerSelection.slice(1);
        let firstLetter = playerSelection.charAt(0).toUpperCase();
        let winnerChoice = firstLetter + slicedString;
        return "You won! " + winnerChoice + " beats " + computerSelection + ".";
    } else {
        let slicedString = computerSelection.slice(1);
        let firstLetter = computerSelection.charAt(0).toUpperCase();
        let winnerChoice = firstLetter + slicedString;
        return "You lost! " + winnerChoice + " beats " + playerSelection + ".";;
    }
}

function game() {
    let gameStatus = 1;
    let playerScore = 0;
    // if (playerScore > 0) {
    //     playerScore = 0;
    // }
    let computerScore = 0;
    // if (computerScore > 0) {
    //     computerScore = 0;
    // }
    while (gameStatus === 1) {
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResult);
        if (roundResult.slice(4, 7) === "won") {
            playerScore +=1;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        } else if (roundResult.slice(4, 8) === "lost") {
            computerScore += 1;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        } else {
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
        if (playerScore > 4) {
            console.log("You won the match with " + playerScore + " points over the computer's " + computerScore + " points.");
            gameStatus = 0;
        } else if (computerScore > 4) {
            console.log("The computer won the match with " + computerScore + " points over your " + playerScore + " points.");
            gameStatus = 0;

        }
    }
}