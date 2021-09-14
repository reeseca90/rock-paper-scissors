let playerselection = '';
let computerSelection = computerPlay();
let result = '';
let playerScore = 0;
let computerScore = 0;

// console.log(playerSelection);
// console.log(computerSelection);

function game() {
    computerSelection = computerPlay();
    playerSelection = prompt('Enter "rock", "paper", or "scissors"', 'rock').toUpperCase();

    // console.log(computerSelection);
    // console.log(playerSelection);

    playRound(playerSelection, computerSelection);

    console.log(result);

    if (playerScore === 5) {
        console.log("You've won five games!");
        resetScore();
    }

    if (computerScore === 5) {
        console.log("You've lost five games!");
        resetScore();
    }
}

function playRound(playerSelection, computerSelection) {

    // console.log(playerSelection);

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

    } else {

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