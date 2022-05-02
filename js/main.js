// import * as gamefunctions from './lowOrHighGame';

// What is its name? Store in localStorage - CHECK, but using prompt(), obviously not a long-term solution. Eventually refactor this.

// Needs to reload to new screen after receiving input?

// Starts with 50% hunger, happiness, energy

// Options: feed, sleep, play, medicate, bathe, stats, scold

// Games: number guessing game, slot machine, matching game

// https://blog.teamtreehouse.com/css-sprite-sheet-animations-steps

/* ===================================

    CLASS CONSTRUCTORS FOR NEW PET

=================================== */

class ResetToNewPet {
    constructor(age, size, hunger, happiness, discipline) {
        this.age = age;
        this.size = size;
        this.hunger = hunger;
        this.happiness = happiness;
        this.discipline = discipline;
    }
}

// const newThing = new ResetToNewPet(0, 13, 50, 80, 20);
// console.log('newThing: ', newThing);

window.onload = function () {
    setStorageName();
    setDisplayName();
    return newThing = new ResetToNewPet(0, 8, 50, 80, 20);
}

/* ===================================

        DOCUMENT SELECTORS

=================================== */

const titleAndName = document.querySelector('.main-wrapper h1');

const feedButton = document.querySelector('.feed-icon');
const sleepButton = document.querySelector('.sleep-icon');
const playButton = document.querySelector('.play-icon');
const medicateButton = document.querySelector('.medicate-icon');
const batheButton = document.querySelector('.bathe-icon');
const statsButton = document.querySelector('.stats-icon');
const scoldButton = document.querySelector('.scold-icon');
const attentionButton = document.querySelector('.attention-icon');

/* ===================================

        BUTTON EVENT LISTENERS

=================================== */

feedButton.addEventListener('click', function () {
    console.log(`You've clicked feed.`);
});

sleepButton.addEventListener('click', function () {
    console.log(`You've clicked sleep.`);
});

playButton.addEventListener('click', function () {
    console.log(`You've clicked play.`);
});

medicateButton.addEventListener('click', function () {
    console.log(`You've clicked medicate.`);
});

batheButton.addEventListener('click', function () {
    console.log(`You've clicked bathe.`);
});

statsButton.addEventListener('click', function () {
    console.log(`You've clicked stats.`);
});

scoldButton.addEventListener('click', function () {
    console.log(`You've clicked scold.`);
});

attentionButton.addEventListener('click', function () {
    console.log(`What's wrong?`);
});

/* ===================================

        DOCUMENT SELECTORS

=================================== */

function setStorageName() {
    const petName = localStorage.getItem('name');
    // let namedNewPet = {};
    if (!petName) {
        const name = prompt('What is your pet\'s name?');
        localStorage.setItem('name', name);
        const namedNewPet = new ResetToNewPet(0, 12, 50, 75, 25);
        return namedNewPet;
    }
};

function setDisplayName() {
    return titleAndName.textContent = localStorage.getItem('name');
}

