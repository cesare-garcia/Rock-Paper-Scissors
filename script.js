let buttons = document.querySelectorAll('button');

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        displayResult(e.target);
    });
}

function displayResult(event) {

    let resultNode = document.querySelector('.result');
    let previousNode = document.querySelector('.result-one');

    if ( resultNode.children.length > 0 ) {
        resultNode.removeChild(previousNode);
        let playerChoice = event.innerHTML.trim().toUpperCase();
        let roundOutcome = playRound(playerChoice)
        let resultText = document.createElement('p');
        resultText.classList.add('result-one');
        resultText.textContent = roundOutcome;
        resultNode.appendChild(resultText);

    } else {
        let playerChoice = event.innerHTML.trim().toUpperCase();
        let roundOutcome = playRound(playerChoice)
        let resultText = document.createElement('p');
        resultText.classList.add('result-one');
        resultText.textContent = roundOutcome;
        resultNode.appendChild(resultText);
    }
};

function playRound(playerPlay) {

    let rivalPlay = getComputerChoice();
    // let playerPlay = prompt('Please choose Rock, Paper, or Scissors.').trim().toUpperCase();
    let outcomeText;

    if ( playerPlay == 'ROCK' && rivalPlay == 'SCISSORS' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Player chose ROCK. Computer chose SCISSORS.
                       You win! ROCK beats SCISSORS.`;
        return outcomeText;

    } else if ( playerPlay == 'ROCK' && rivalPlay == 'PAPER' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Player chose ROCK. Computer chose PAPER.
                       You lose! PAPER beats ROCK.`;
        return outcomeText;

    } else if ( playerPlay == 'ROCK' && rivalPlay == 'ROCK' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Both players chose ROCK. It's a tie!`;
        return outcomeText;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'ROCK' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Player chose PAPER. Computer chose ROCK.
                       You win! PAPER beats ROCK.`;
        return outcomeText;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'SCISSORS' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Player chose PAPER. Computer chose SCISSORS.
                       You lose! SCISSORS beats PAPER.`;
        return outcomeText;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'PAPER' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Both players chose PAPER. It's a tie!`;
        return outcomeText;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'PAPER' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Player chose SCISSORS. Computer chose PAPER.
                       You win! SCISSORS beats PAPER.`;
        return outcomeText;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'ROCK' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Player chose SCISSORS. Computer chose ROCK.
                       You lose! ROCK beats SCISSORS.`;
        return outcomeText;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'SCISSORS' ) {
        // console.log(`Player chose ${playerPlay}. Computer chose ${rivalPlay}.`);
        outcomeText = `Both players chose SCISSORS. It's a tie!`;
        return outcomeText;
    }
};

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
};

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