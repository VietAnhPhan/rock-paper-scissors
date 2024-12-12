/*
Rock: 0
Paper: 1
Scissor: 2
*/

let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let randNumber = Math.round(Math.random() * 2); // 0->2;
    return numberToString(randNumber);
}

function getHumanChoice() {
    let result = (prompt('Your choice: \nRock \nPaper \nScissor', '')).toLowerCase();
    return result;
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice + ' ' + computerChoice);
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        // console.log('You lose! Paper beats Rock')
    }
    else if (humanChoice == 'paper' && computerChoice == 'rock') {
        computerScore++;
        // console.log('You win! Paper beats Rock')
    }

    else if (humanChoice == 'rock' && computerChoice == 'scissor') {
        humanScore++;
        // console.log('You win! Rock beats Scissor')
    }
    else if (humanChoice == 'scissor' && computerChoice == 'rock') {
        computerScore++;
        // console.log('You lose! Rock beats Scissor')
    }
    else if (humanChoice == 'paper' && computerChoice == 'scissor') {
        computerScore++;
        // console.log('You lose! scissor beats Paper')
    }
    else if (humanChoice == 'scissor' && computerChoice == 'paper') {
        humanScore++;
        // console.log('You win! scissor beats Paper')

    }
    else if (humanChoice == computerChoice) {
        console.log('You are draw!');
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

playGame();
// getComputerChoice();