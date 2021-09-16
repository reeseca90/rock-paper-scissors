let computerSelection = computerPlay();
let result = '';
let playerScore = 0;
let computerScore = 0;

// creates onclick functions for each button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function(e) {
    game(e.target.id); // get id from HTML for button clicked
}));

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const winnerDisplay = document.querySelector('#roundWinner');
const gameWinnerDisplay = document.querySelector('#gameWinner');

function game(playerSelection) { // playerSelection passed from e.target.id for button onclick
    gameWinnerDisplay.textContent = ""; // reset gameWinnerDisplay each new round

    computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);

    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    winnerDisplay.textContent = result;

    if (playerScore === 5) {
        gameWinnerDisplay.textContent = "You've won five games! Make a selection to play again."
        resetScore();
    }

    if (computerScore === 5) {
        gameWinnerDisplay.textContent = "You've lost five games! Make a selection to play again."
        resetScore();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK') {

        if (computerSelection === 'ROCK') {
            result = 'It\'s a tie!';
        } else if (computerSelection === 'PAPER') {
            result = 'You lose! Paper beats Rock!';
            computerScore++;
        } else {
            result = 'You win! Rock beats Scissors!';
            playerScore++;
        }

    } else if (playerSelection === 'PAPER') {

        if (computerSelection === 'ROCK') {
            result = 'You win! Paper beats Rock!';
            playerScore++;
        } else if (computerSelection === 'PAPER') {
            result = 'It\'s a tie!';
        } else {
            result = 'You lose! Scissors beat Paper!';
            computerScore++;
        }

    } else { // if player didn't pick ROCK or PAPER, they picked SCISSORS

        if (computerSelection === 'ROCK') {
            result = 'You lose! Rock beats Scissors!';
            computerScore++;
        } else if (computerSelection === 'PAPER') {
            result = 'You win! Scissors beat Paper!';
            playerScore++;
        } else {
            result = 'It\'s a tie!';
        }
    }
}

function computerPlay() {
    let playIndex = Math.floor(Math.random() * 3 + 1); // random int between 1 and 3
    switch(playIndex) {
        case 1:
            return 'ROCK';
            break;
        case 2:
            return 'PAPER';
            break;
        case 3:
            return 'SCISSORS';
            break;
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}