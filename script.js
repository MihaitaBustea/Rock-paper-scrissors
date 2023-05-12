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

