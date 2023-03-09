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
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const outcome = document.querySelector('.outcome');
const roundCounter = document.querySelector('#round-counter');
const gameEnd = document.querySelector('.game-end')
const endText = document.querySelector('.end-text');
const resetButton = document.querySelector('.reset-button')
const optionButtons = document.querySelectorAll('.button');
const opts = document.querySelector('.options')
// Clicking the round button will fire a round of RPS 
// Steps: determine winner, post restuls, increment player score
// After 5 rounds: hide the buttons, show a reset button, annouce the winner 

optionButtons.forEach( button => {
    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        let computerChoice = getComputerChoice();
        let winner = determineWinner(playerChoice, computerChoice);

        
        outcome.textContent = winner;

        if (winner === 'Player wins!') {
            +playerScore.textContent++;
        } else if (winner === 'Computer wins!') {
            +computerScore.textContent++;
        } else {
            +playerScore.textContent++
            +computerScore.textContent++
        }

        if (+roundCounter.textContent < 4) {
            +roundCounter.textContent++;

        } else {
            // roundCounter.textContent = 0
            // outcome.textContent = ''
            // playerScore.textContent = 0
            // computerScore.textContent = 0
            +roundCounter.textContent++;
            button.parentElement.style.display = "none";
            gameEnd.style.display = "flex";
            if (+playerScore.textContent > +computerScore.textContent) {
                endText.textContent = "Player Wins The Game!";
            } else if (+playerScore.textContent < +computerScore.textContent) {
                endText.textContent = "Computer Wins The Game!";
            } else {
                endText.textContent = "Tie Game!";
            }
        }
    }
)});

resetButton.addEventListener('click', () => {
    opts.style.display = 'flex';
    gameEnd.style.display = 'none';
    outcome.textContent = '';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    roundCounter.textContent = 0
})