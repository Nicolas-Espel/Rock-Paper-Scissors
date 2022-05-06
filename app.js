const compArray = ['rock' , 'paper' , 'scissors'];
const compChoiceRandom = compArray [Math.floor(Math.random() * compArray.length | 0)];
const selectionButtons = document.querySelectorAll('[data-selection]')
const results = document.querySelector('.results');
const playerEmoji = document.querySelector('.scoreu');
const compEmoji = document.querySelector('.scorec');
const playerScore = document.querySelector('.score-counteru');
const compScore = document.querySelector('.score-counterc');
const compChoice = compArray [Math.floor(Math.random() * compArray.length | 0)];

let userWin = 0;
let compWin = 0;

//while(userWin < 5 || compWin < 5) {
    let playerChoice = selectionButtons.forEach(selectionButton => {
        selectionButton.addEventListener('click', () => {
            const selectionName = selectionButton.dataset.selection
            playerChoice = selectionName;
            compChoice;
            makeSelection(selectionName);
            oneRound(playerChoice, compChoice);
            game(playerChoice, compChoice);
            
        })
    })   
//};

function makeSelection(selectionName) {

    if(selectionName == 'rock') {
        playerEmoji.textContent = '👊'
    } else if(selectionName == 'paper') {
        playerEmoji.textContent = '✋'
    } else if(selectionName == 'scissors') {
        playerEmoji.textContent = '✌'
    }

};

function oneRound(playerChoice, compChoice) {  
    if(playerChoice == compChoice) {
        return results.textContent = `You tied, try again?`;
    } else if(playerChoice == 'paper' && compChoice == 'scissors' || playerChoice == 'rock' && compChoice == 'paper' || playerChoice == 'scissors' && compChoice == 'rock') {
        compWin++
        return results.textContent = `You lost! ${compChoice} beats ${playerChoice}... Try again?`;
    } else if(playerChoice == 'paper' && compChoice == 'rock' || playerChoice == 'rock' && compChoice == 'scissors' || playerChoice == 'scissors' && compChoice == 'paper') {
        userWin++
        return results.textContent = `You won! ${playerChoice} beats ${compChoice}. Keep it up!`;
    }
};
//initializing both playerChoice and compChoice (calling the compPlay() function) compWin and userWin play later to create a scoreboard

function game(playerChoice, compChoice) {
        makeSelection();
        if(compChoice == 'rock') {
            compEmoji.textContent = '👊';
        } else if(compChoice == 'paper') {
            compEmoji.textContent = '✋';
        } else if(compChoice == 'scissors') {
            compEmoji.textContent = '✌';
        };
        playerScore.textContent = `Player score: ${userWin}`;
        compScore.textContent = `Computer score: ${compWin}`;
        
        if(userWin == 5) {
        alert('Game Over! You Win!');
        } else if(compWin == 5) {
        alert('Game Over! You Lost...');
        }
};
