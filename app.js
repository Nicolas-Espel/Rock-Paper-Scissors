const compArray = ['rock' , 'paper' , 'scissors'];
const selectionButtons = document.querySelectorAll('[data-selection]')
const results = document.querySelector('.results');
const playerEmoji = document.querySelector('.scoreu');
const compEmoji = document.querySelector('.scorec');
const playerScore = document.querySelector('.score-counteru');
const compScore = document.querySelector('.score-counterc');
const restart = document.querySelector('.restart');
const gameOver = document.querySelector('.game-over-screen');
const gameOverResult = document.querySelector('.game-over-result');
const gameOverContent = document.querySelector('.game-over-content');


let userWin = 0;
let compWin = 0;

let playerChoice = selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', () => {
        const selectionName = selectionButton.dataset.selection
        playerChoice = selectionName;
        let compChoice = compArray [Math.floor(Math.random() * compArray.length | 0)];
        makeSelection(selectionName);
        oneRound(playerChoice, compChoice);
        game(playerChoice, compChoice);
        })
    })   

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
        gameOver.classList.remove('hide')
        gameOver.classList.add('fade')
        gameOverResult.textContent = 'WOW! YOU WON!!'
        gameOverContent.textContent = `Looks like you're smarter than a computer! You should play again...`
        } else if(compWin == 5) {
            gameOver.classList.remove('hide')
            gameOver.classList.add('fade')
            gameOverResult.textContent = 'YOU... LOST??'
            gameOverContent.textContent = `You let a computer beat you huh... How about you try again?`
        }   
};
