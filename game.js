let playerselection = '';
let computerSelection = computerPlay();
let result = '';

// console.log(playerSelection);
// console.log(computerSelection);

function game() {
    computerSelection = computerPlay();
    playerSelection = prompt('Enter "rock", "paper", or "scissors"', 'rock').toUpperCase();

    console.log(computerSelection);
    console.log(playerSelection);

    playRound(playerSelection, computerSelection);

    console.log(result);
}

function playRound(playerSelection, computerSelection) {

    // console.log(playerSelection);

    if (playerSelection === 'ROCK') {

        if (computerSelection === 'ROCK') {
            result = 'It\'s a tie!';
        } else if (computerSelection === 'PAPER') {
            result = 'You lose! Paper beats Rock!';
        } else {
            result = 'You win! Rock beats Scissors!';
        }

    } else if (playerSelection === 'PAPER') {

        if (computerSelection === 'ROCK') {
            result = 'You win! Paper beats Rock!';
        } else if (computerSelection === 'PAPER') {
            result = 'It\'s a tie!';
        } else {
            result = 'You lose! Scissors beat Paper!';
        }

    } else {

        if (computerSelection === 'ROCK') {
            result = 'You lose! Rock beats Scissors!';
        } else if (computerSelection === 'PAPER') {
            result = 'You win! Scissors beat Paper!';
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

