// Randomly returned Rock, Paper or Scissors
let getComputerChoice = () => {
    num = Math.trunc(Math.random() * 3);
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else if (num === 2) {
        return 'Scissors';
    }
}

// Determines winnner between player and computer choices 
let determineWinner = (playerChoice, computerChoice) => {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'Tie game!';
        } else if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else if (computerChoice === 'scissors') {
            return 'Player wins!';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Player wins!';
        } else if (computerChoice === 'paper') {
            return 'Tie game!';
        } else if (computerChoice === 'scissors') {
            return 'Computer wins!';
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else if (computerChoice === 'paper') {
            return 'Player wins!';
        } else if (computerChoice === 'scissors') {
            return 'Tie game!';
        }
    }
}

// Play a set of 5 rounds and determine the winner 

let game = () => {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i <= 4; i++) {
        playerChoice = prompt("Rock, paper or scissors?"); 
        computerChoice = getComputerChoice();
        roundWinner = determineWinner(playerChoice, computerChoice)
        console.log(roundWinner);
        if (roundWinner === 'Player wins!') {
            playerScore += 1;
        } else if (roundWinner === 'Computer wins!') {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore) {
        console.log("Game goes to the Player!");
    } else if (computerScore > playerScore) {
        console.log("Game goes to the Computer!");
    } else {
        console.log("The game is a tie!");
    }
}