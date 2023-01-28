let buttons = document.querySelectorAll('button');
let totalWins_p = 0;
let totalWins_c = 0;
let ties = 0;

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        displayResult(e.target);
    });
}

function displayResult(event) {

    let resultNode = document.querySelector('.result');
    let previousNode = document.querySelector('.result-one');
    let playerParagraph = document.querySelector('#player-wins');
    let computerParagraph = document.querySelector('#computer-wins');;
    let tiesParagraph = document.querySelector('#ties-game');

    if ( resultNode.children.length > 0 ) {
        resultNode.removeChild(previousNode);
        let playerChoice = event.innerHTML.trim().toUpperCase();
        let roundOutcome = createResultMessage(playerChoice, resultNode);
        countWins(roundOutcome[1]);
        playerParagraph.textContent = totalWins_p;
        computerParagraph.textContent = totalWins_c;
        tiesParagraph.textContent = ties;
    } else {
        let playerChoice = event.innerHTML.trim().toUpperCase();
        let roundOutcome = createResultMessage(playerChoice, resultNode);
        countWins(roundOutcome[1]);
        playerParagraph.textContent = totalWins_p;
        computerParagraph.textContent = totalWins_c;
        tiesParagraph.textContent = ties;
    }
};

function createResultMessage(choice, targetNode) {
    let outcomeArray = playRound(choice)
    let resultText = createResultP();
    resultText.textContent = outcomeArray[0];
    targetNode.appendChild(resultText);
    return outcomeArray;
}

function createResultP() {
    let result_p = document.createElement('p');
    result_p.classList.add('result-one');
    return result_p;
}

function countWins(winnerInfo) {
    if ( winnerInfo == 'Player wins') {
        totalWins_p += 1;
    } else if ( winnerInfo == 'Computer wins') {
        totalWins_c += 1;
    } else {
        ties += 1;
    }
}

function playRound(playerPlay) {

    let rivalPlay = getComputerChoice();
    let outcome = [];

    if ( playerPlay == 'ROCK' && rivalPlay == 'SCISSORS' ) {
        outcome = [`Player chose ROCK. Computer chose SCISSORS.
                       You win! ROCK beats SCISSORS.`, 'Player wins'];
        return outcome;

    } else if ( playerPlay == 'ROCK' && rivalPlay == 'PAPER' ) {
        outcome = [`Player chose ROCK. Computer chose PAPER.
                       You lose! PAPER beats ROCK.`, 'Computer wins'];
        return outcome;

    } else if ( playerPlay == 'ROCK' && rivalPlay == 'ROCK' ) {
        outcome = [`Both players chose ROCK. It's a tie!`, 'Tie'];
        return outcome;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'ROCK' ) {
        outcome = [`Player chose PAPER. Computer chose ROCK.
                       You win! PAPER beats ROCK.`, 'Player wins'];
        return outcome;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'SCISSORS' ) {
        outcome = [`Player chose PAPER. Computer chose SCISSORS.
                       You lose! SCISSORS beats PAPER.`, 'Computer wins'];
        return outcome;

    } else if ( playerPlay == 'PAPER' && rivalPlay == 'PAPER' ) {
        outcome = [`Both players chose PAPER. It's a tie!`, 'Tie'];
        return outcome;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'PAPER' ) {
        outcome = [`Player chose SCISSORS. Computer chose PAPER.
                       You win! SCISSORS beats PAPER.`, 'Player wins'];
        return outcome;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'ROCK' ) {
        outcome = [`Player chose SCISSORS. Computer chose ROCK.
                       You lose! ROCK beats SCISSORS.`, 'Computer wins'];
        return outcome;

    } else if ( playerPlay == 'SCISSORS' && rivalPlay == 'SCISSORS' ) {
        outcome = [`Both players chose SCISSORS. It's a tie!`, 'Tie'];
        return outcome;
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