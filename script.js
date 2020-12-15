let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:

//function that generates a random num between 0 - 9

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

let targetNumber = generateTarget();

// compares the different inputs and sees which one is closer to the target
/*
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {

    let userDiff = targetNumber - humanGuess;
    let botDiff = targetNumber - computerGuess;
    let input;
    
    if (userDiff > botDiff) {
        return false;
    } else if (userDiff < botDiff) {
        return true;
    } else if ((userDiff < 0) && (botDiff < 0)) {
        let posUserDiff = userDiff * -1;
        let posBotDiff = botDiff * -1;

        if (posUserDiff > posBotDiff) {
            return false;
        } else {
            return true;
        };
        
    } else if ((userDiff < 0) && (botDiff > 0)) {
        let posUserDiff = userDiff * -1;

        if (posUserDiff > botDiff) {
            return false;
        } else {
            return true;
        };
    
    } else if ((botDiff < 0) && (userDiff > 0)) {
        let posBotDiff = botDiff * -1;

        if (userDiff > posBotDiff) {
            return false;
        } else {
            return true;
        };
        
    } else if (userDiff === 0) {
        return true;
    } else if (botDiff === 0) {
        return false;
    } else if (userDiff === botDiff) {
        return true;
    };

};
*/

let compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const userG = Math.abs(targetNumber - humanGuess);
    const computerG = Math.abs(targetNumber - computerGuess);
    return userG <= computerG;
};

/*

// changes value of input to either "human" or "computer"
let input =  compareGuesses(humanGuess, computerGuess, targetNumber) ? 'human' : 'computer';
*/

// updates scoreboard by increasing the score depending on who wins (++)

const updateScore = (input) => {

    if (input === "human") {
        return ++humanScore;
        
    } else if (input === "computer") {
        return ++computerScore;
    };
};

// updates the rounds by increasing the currentRound after each run through (++)

function advanceRound() {
    currentRoundNumber ++;
};