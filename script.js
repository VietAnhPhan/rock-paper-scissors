/*
Rock: 0
Paper: 1
Scissor: 2
*/

let humanScore = 0, computerScore = 0, humanResult = '', computerResult = '', round = 1;
const DRAW_SCORE = 0.5, WIN = 'Win', LOSE = 'Lose', DRAW = 'Draw';
function getComputerChoice() {
    let randNumber = Math.round(Math.random() * 2); // 0->2;
    return numberToString(randNumber);
}

function getHumanChoice() {
    // let result = (prompt('Your choice: \nRock \nPaper \nScissor', 'rock'));


    return !result ? 'rock' : result.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice + ' ' + computerChoice);
    // if (humanChoice == 'rock' && computerChoice == 'paper') {
    //     computerScore++;
    //     // console.log('You lose! Paper beats Rock')
    // }
    // else if (humanChoice == 'paper' && computerChoice == 'rock') {
    //     humanScore++;
    //     // console.log('You win! Paper beats Rock')
    // }

    // else if (humanChoice == 'rock' && computerChoice == 'scissor') {
    //     humanScore++;
    //     // console.log('You win! Rock beats Scissor')
    // }
    // else if (humanChoice == 'scissor' && computerChoice == 'rock') {
    //     computerScore++;
    //     // console.log('You lose! Rock beats Scissor')
    // }
    // else if (humanChoice == 'paper' && computerChoice == 'scissor') {
    //     computerScore++;
    //     // console.log('You lose! scissor beats Paper')
    // }
    // else if (humanChoice == 'scissor' && computerChoice == 'paper') {
    //     humanScore++;
    //     // console.log('You win! scissor beats Paper')

    // }

    if (humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'rock' && computerChoice == 'scissor' || humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore++;
        humanResult = WIN;
        computerResult = LOSE;
    } else if (computerChoice == 'paper' && humanChoice == 'rock' || computerChoice == 'rock' && humanChoice == 'scissor' || computerChoice == 'scissor' && humanChoice == 'paper') {
        computerScore++;
        computerResult = WIN;
        humanResult = LOSE;
    }

    else if (humanChoice == computerChoice) {
        humanScore += DRAW_SCORE;
        computerScore += DRAW_SCORE;
        computerResult = DRAW;
        humanResult = DRAW;
        // console.log('You are draw!');
    }
    else {
        console.log('Something wrong!')
    }

}

function playGame() {
    //round1
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }


    if (humanScore > computerScore) {
        console.log("Congratulate! You're Winner!");
    }
    else if (humanScore == computerScore) {
        console.log("You're draw!");
    }
    else {
        console.log("Unfortunately! You lose!");
    }
}

function stringToNumber(choice) {
    if (choice == 'rock') {
        return 0;
    }
    else if (choice == 'paper') {
        return 1;
    } else if (choice == 'scissor') {
        return 2;
    }
    else {
        return -1;
    }
}

function numberToString(number) {
    if (number == 0) {
        return 'rock';
    }
    else if (number == 1) {
        return 'paper';
    } else if (number == 2) {
        return 'scissor';
    }
    else {
        return 'nothing';
    }
}

function getHumanScore() {
    return humanScore;
}

function getComputerScore() {
    return computerScore;
}

function getRound() {
    return round;
}

function nextRound() {
    return round++;
}

function checkWin() {
    if (getHumanScore() == getComputerScore() && getHumanScore() == 5 || getComputerScore() == 5) {
        return 'Draw';
    }
    else if (getHumanScore() >= 5) {
        return 'Human';
    }
    else if (getComputerScore() >= 5) {
        return 'Computer';
    }

    else return false;
}

const ul = document.querySelector('.result ul');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
const whoWin = document.createElement('h3');
buttons.forEach(button => button.addEventListener('click', (e) => {
    const roundTitle = document.createElement('h2');
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const resultOfRow = document.createElement('li');
    const resultOfChoice = document.createElement('li');
    const humanStatus = document.createElement('p');
    const computerStatus = document.createComment('p');

    playRound(humanChoice, computerChoice);

    roundTitle.textContent = 'Round: ' + getRound();

    resultOfChoice.textContent = "Human: " + humanChoice + " - " + "Computer: " + computerChoice;

    resultOfRow.textContent = "Human Score: " + humanScore + " - " + "Computer Score: " + computerScore;
    humanStatus.textContent = 'Human ' + humanResult;
    computerStatus.textContent = 'Computer ' + computerResult;

    result.appendChild(roundTitle);
    ul.appendChild(resultOfChoice);
    ul.appendChild(resultOfRow);
    result.appendChild(humanStatus);
    result.appendChild(computerStatus);

    if (checkWin()) {

        whoWin.textContent = 'Who Win: ' + checkWin();
        result.appendChild(whoWin);
    }
    nextRound();
}));


// const rockButton 

// playGame();
// getComputerChoice();