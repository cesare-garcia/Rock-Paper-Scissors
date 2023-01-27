playRound();

function playRound() {

    let rivalPlay = getComputerChoice();
    let playerPlay = prompt('Please choose Rock, Paper, or Scissors.').trim().toUpperCase();
    let outcomeText;

    if ( playerPlay == 'ROCK' && rivalPlay == 'SCISSORS' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `You win! ROCK beats SCISSORS.`;
        return outcomeText;

    } else if ( playerPlay == 'ROCK' && rivalPlay == 'PAPER' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `You lose! PAPER beats ROCK.`;
        return outcomeText;

    } else if ( playerPlay == 'ROCK' && rivalPlay == 'ROCK' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `It's a tie!`;
        return outcomeText;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'ROCK' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `You win! PAPER beats ROCK.`;
        return outcomeText;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'SCISSORS' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `You lose! SCISSORS beats PAPER.`;
        return outcomeText;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'PAPER' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `It's a tie!`;
        return outcomeText;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'PAPER' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `You win! SCISSORS beats PAPER.`;
        return outcomeText;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'ROCK' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `You lose! ROCK beats SCISSORS.`;
        return outcomeText;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'SCISSORS' ) {
        console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `It's a tie!`;
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

//--------------------------------------Automated 5 round RPS Game---------------

// function game(gameRound) {

//     let playerWins = 0;
//     let computerWins = 0;
//     let gameTies = 0;
//     let playerWin_message = "Congratulations! You won the series!";
//     let computerWin_message = "Oh no, you lost the series...";
//     let tie_message = "You tied! Refresh the browser to play another series.";

//     for ( let i = 1; i <= 5; i++ ) {
//         let gameOutcome = gameRound();
//         console.log(gameOutcome);
//         if ( gameOutcome == `You win! ROCK beats SCISSORS.`  ) {
//             playerWins += 1;
//         } else if ( gameOutcome == `You win! PAPER beats ROCK.` ) {
//             playerWins += 1;
//         } else if ( gameOutcome == `You win! SCISSORS beats PAPER.` ) {
//             playerWins += 1;
//         } else if ( gameOutcome == `You lose! PAPER beats ROCK.` ) {
//             computerWins += 1;
//         } else if ( gameOutcome == `You lose! SCISSORS beats PAPER.` ) {
//             computerWins += 1;
//         } else if ( gameOutcome == `You lose! ROCK beats SCISSORS.` ) {
//             computerWins += 1;
//         } else { 
//             gameTies += 1;
//         }
//     }

//     if ( playerWins > computerWins ) {
//         return playerWin_message;
//     } else if ( computerWins > playerWins ) {
//         return computerWin_message;
//     } else {
//         return tie_message;
//     };
// }