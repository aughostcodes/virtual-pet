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

// Random number, min and max are inclusive
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random number from 2 - 8
// function generateRandomNumber2To8() {
//     return Math.floor(Math.random() * (8 - 2 + 1)) + 2;
// }

// Lower or higher guessing game
function lowOrHigh() {
    const control = generateRandomNumber(1, 9);
    console.log('control: ', control);
    let displayedNum = 0;
    if (control === 1 || control === 9) {
        displayText.textContent = generateRandomNumber(2, 8);
    } else if (control === 2) {
        let twoResult = generate5050();
        if (twoResult === true) {
            displayedNum = control + 2;
            displayText.textContent = displayedNum;
        } else {
            displayedNum = control - 1;
            displayText.textContent = displayedNum;
        }
    } else if (control > 2 && control < 5) {
        let threeFourResult = generate5050();
        if (threeFourResult === true) {
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
    } else if (control > 5 && control < 8) {
        let sixSevenResult = generate5050();
        if (sixSevenResult === true) {
            displayedNum = control + 2;
            displayText.textContent = displayedNum;
        } else if (control === 8) {
            let eightResult = generate5050();
            if (eightResult === true) {
                displayedNum = control + 1;
                displayText.textContent = displayedNum;
            } else {
                displayedNum = control - 2;
                displayText.textContent = displayedNum;
            }
        }
    }
    // return control;
}

function guessLow(control) {
    if (control < displayText.textContent.value) {
        console.log('guessing low?');
    }
}

function guessHigh(control) {
    if (control > displayText.textContent.value) {
        console.log('control: ', control);
        console.log('guessing high?');
    }
}

lessButton.addEventListener('click', guessLow);

greaterButton.addEventListener('click', guessHigh);