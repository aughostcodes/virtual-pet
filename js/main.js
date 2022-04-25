'use strict';

const displayText = document.querySelector('.display-text');
const lessButton = document.querySelector('.less-than');
const greaterButton = document.querySelector('.greater-than');

// What is his name?
// Needs to reload to new screen after receiving input?


// Starts with 50% hunger, happiness, energy


// Games: number guessing game, slot machine, matching game


// Random true or false {
function generate5050() {
    return Math.random() < 0.5;
}

// Random number from 1 - 9
function generateRandomNumber10() {
    return Math.floor(Math.random() * 9) + 1;
}

// Lower or higher guessing game
function lowOrHigh() {
    const control = generateRandomNumber10();
    console.log('control: ', control);
    let displayedNum = 0;
    if (control === 1) {
        
    } else if (control <= 4) {
        let fiveResult = generate5050();
        if (fiveResult === true) {
            displayedNum = control + 2;
            displayText.textContent = displayedNum;
        } else {
            displayedNum = control - 2;
            displayText.textContent = displayedNum;
        }
    } else if (control === 5) {
        let fiveResult = generate5050();
        if (fiveResult === true) {
            displayedNum = control + 2;
            displayText.textContent = displayedNum;
        } else {
            displayedNum = control - 2;
            displayText.textContent = displayedNum;
        }
    } else if (control >= 6) {
        displayedNum = control - 2;
        displayText.textContent = displayedNum;
    }
}

function guessLow(control) {

}

lessButton.addEventListener('click', function () {
    console.log('less than yo');
});

greaterButton.addEventListener('click', function () {
    console.log('greater than yo');
});