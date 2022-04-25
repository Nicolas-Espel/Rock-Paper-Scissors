const compArray = ['rock' , 'paper' , 'scissors'];
const compChoiceRandom = compArray [Math.floor(Math.random() * compArray.length | 0)];
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let userWin = 0;
let compWin = 0;

function compPlay () {
    return compChoiceRandom
};




//Plays one round calling the playerChoice and random computer choice coded above, .toLowerCase() added to keep the user input consistent
function oneRound(playerChoice, compChoice,) {  
    playerChoice = playerChoice.toLowerCase();
    while(userWin < 5 && compWin <5) {
    if(playerChoice == compChoice) {
        return `You tied, try again?`;
    } else if(playerChoice == 'paper' && compChoice == 'scissors' || playerChoice == 'rock' && compChoice == 'paper' || playerChoice == 'scissors' && compChoice == 'rock') {
        compWin++
        return `You lost! ${compChoice} beats ${playerChoice}... Try again?`;
    } else if(playerChoice == 'paper' && compChoice == 'rock' || playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'scissors' && compChoice == 'paper') {
        userWin++
        return `You won! ${playerChoice} beats ${compChoice}. Keep it up!`;
    } else {
        return alert('Error please select rock, paper, or scissors.');
    };
    }
};
//initializing both playerChoice and compChoice (calling the compPlay() function) compWin and userWin play later to create a scoreboard
//toLowerCase() added again to keep user input consistent, game() function calls the oneRound() function and loops through the rounds till first to hit 5 wins
function game() {
    for(i = 0; userWin < 5 && compWin <5; i++) {
        let playerChoice = prompt('Rock, Paper or Scissors?');
        playerChoice = playerChoice.toLowerCase();
        compChoice = compArray [Math.floor(Math.random() * compArray.length | 0)];
        console.log(`You threw out ${playerChoice}`);
        console.log(`Computer threw out ${compChoice}...`);
        console.log(oneRound(playerChoice,compChoice));
        console.log(`Player score: ${userWin} Computer score: ${compWin}`)
        
    }
    if(userWin == 5) {
        alert('Game Over! You Win!')
    } else if(compWin == 5) {
        alert('Game Over! You Lost...')
    }
};

game();

