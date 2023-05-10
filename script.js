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
    let winner = undefined;
    if (playerSelection === computerSelection) {
        return "It's a TIE, the player chose " + playerSelection + " while the computer chose " + computerSelection + ".";
    } else if (playerSelection === "rock" && computerSelection === "scrissors" || playerSelection === "scrissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        winner = "The player";
        console.log(winner + " won. They chose " + playerSelection + " while the computer chose " + computerSelection + ".");
        return winner;
    } else {
        winner = "The computer";
        console.log(winner + " won. They chose " + computerSelection + " while the player chose " + playerSelection+ ".");
        return winner;
    }
}