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