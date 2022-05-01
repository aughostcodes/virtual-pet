'use strict';

const displayText = document.querySelector('.display-text');
const lessButton = document.querySelector('.less-than');
const greaterButton = document.querySelector('.greater-than');
const playAgainButton = document.querySelector('.play-again');

// What is his name?
// Needs to reload to new screen after receiving input?


// Starts with 50% hunger, happiness, energy

// Options: feed, sleep, play, medicate, bathe, stats, scold

// Games: number guessing game, slot machine, matching game


// Random true or false
function generate5050() {
    return Math.random() < 0.5;
}

// Random number, min and max are inclusive
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Lower or higher guessing game
function lowOrHighGame() {
    let control = generateRandomNumber(1, 9);
    // console.log('control: ', control);
    let displayedNum = 0;
    let winTally = 0;
    let loseTally = 0;
    lessButton.addEventListener('click', guessLow);
    greaterButton.addEventListener('click', guessHigh);
    playAgainButton.addEventListener('click', playAnotherRound);


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
        } else {
            displayedNum = control - 2;
            displayText.textContent = displayedNum;
        }
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
    return control;

    function clearCounts() {
        control = 0;
        displayedNum = 0;
    }

    function guessLow() {
        if (control < displayText.textContent) {
            console.log(`${control} is less than ${displayText.textContent}! You win this round!`);
            winTally += 1;
            checkTally();
            clearCounts();
        } else {
            console.log(`Nope, try again!`);
            loseTally += 1;
            checkTally();
            clearCounts();
        }
    }

    function guessHigh() {
        if (control > displayText.textContent) {
            console.log(`${control} is greater than ${displayText.textContent}! You win this round!`);
            winTally += 1;
            checkTally();
            clearCounts();
        } else {
            console.log('Nope, try again!');
            loseTally += 1;
            checkTally();
            clearCounts();
        }

    }

    function checkTally() {
        if (winTally === 3) {
            console.log(`You win the game!`);
        }
        if (loseTally === 3) {
            console.log(`Sorry, you lose the game. Try again!`);
        }
    }

    function playAnotherRound() {
        clearCounts();
        lowOrHighGame();
    }
}