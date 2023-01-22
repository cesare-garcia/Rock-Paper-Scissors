let rivalPlay = getComputerChoice();
console.log(rivalPlay);
let playerPlay = prompt('Please choose Rock, Paper, or Scissors.').trim().toUpperCase();
console.log(playerPlay);

console.log(playRound(playerPlay, rivalPlay));

function playRound(player_choice, computer_choice) {

    let outcomeText;

    if ( player_choice == 'ROCK' && computer_choice == 'SCISSORS' ) {
        outcomeText = `You win! ${player_choice} beats ${computer_choice}.`;
        return outcomeText;

    } else if ( player_choice == 'ROCK' && computer_choice == 'PAPER' ) {
        outcomeText = `You lose! ${computer_choice} beats ${player_choice}.`;
        return outcomeText;

    } else if ( player_choice == 'ROCK' && computer_choice == 'ROCK' ) {
        outcomeText = `It's a tie! Refresh the browser to play again.`;
        return outcomeText;

    } else if ( player_choice == 'PAPER' && computer_choice == 'ROCK' ) {
        outcomeText = `You win! ${player_choice} beats ${computer_choice}.`;
        return outcomeText;

    } else if ( player_choice == 'PAPER' && computer_choice == 'SCISSORS' ) {
        outcomeText = `You lose! ${computer_choice} beats ${player_choice}.`;
        return outcomeText;

    } else if ( player_choice == 'PAPER' && computer_choice == 'PAPER' ) {
        outcomeText = `It's a tie! Refresh the browser to play again.`;
        return outcomeText;

    } else if ( player_choice == 'SCISSORS' && computer_choice == 'PAPER' ) {
        outcomeText = `You win! ${player_choice} beats ${computer_choice}.`;
        return outcomeText;

    } else if ( player_choice == 'SCISSORS' && computer_choice == 'ROCK' ) {
        outcomeText = `You lose! ${computer_choice} beats ${player_choice}.`;
        return outcomeText;

    } else if ( player_choice == 'SCISSORS' && computer_choice == 'SCISSORS' ) {
        outcomeText = `It's a tie! Refresh the browser to play again.`;
        return outcomeText;
    }
}

function getComputerChoice() {
    let computerPlay;
    let randomNum = Math.floor(Math.random()*3+1);
    
    if (randomNum == 1) {
        computerPlay = 'ROCK';
    } else if (randomNum == 2) {
        computerPlay = 'PAPER';
    } else {
        computerPlay = 'SCISSORS';
    }
    return computerPlay;
}

