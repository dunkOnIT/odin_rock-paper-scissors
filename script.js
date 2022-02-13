// Variables and elements

const options = ["rock", "paper", "scissors"];

const gameElements = document.querySelectorAll(".rps-button")

// Game logic

function play() {

    if (Math.random() <= 0.33) {
        return options[0];
    }
    else if (Math.random() <= 0.66) {
        return options[1];
    }
    else {
        return options[2];
    }
}

function computeResult(computerChoice, playerChoice) {
    if (computerChoice == playerChoice) {
        return "Draw!"
    }

    if (((computerChoice == options[0]) &&  (playerChoice == options[1])) ||
        ((computerChoice == options [1]) && (playerChoice == options[2])) ||
        ((computerChoice == options [2]) && (playerChoice == options[0]))) {
            return "You win!"
        } 
    return "You lose!"
}

function playGame(repetitions=1) {
    let playerScore = 0

   for (let i=0; i<repetitions; i++) {
       let gameNumber = i + 1
    //    let playerChoice = prompt("***GAME " + gameNumber + "***\nRock, paper or scissors?");
       let computerChoice = play();
       let gameResult = computeResult(computerChoice, playerChoice);
       if (gameResult == "You win!") {
           playerScore++
       }

       alert(gameResult + "\nYour chose: " + playerChoice + 
            "\nComputer chose: " + computerChoice + 
            "\nCurrent score: " + playerScore + " wins out of " + repetitions + " games.") 
       console.log("Player choice: " + playerChoice); 
       console.log("Computer choice: " + computerChoice);
       console.log(gameResult + "\n");
   } 
}

function displayGameResult(computerChoice, playerChoice, gameResult) {
    switch (gameResult) {
        case "Draw!":
    }
}


// Event listeners

gameElements.forEach((gameElement) => {
    gameElement.addEventListener("click", () => {
        alert(gameElement.textContent);

    });


});

