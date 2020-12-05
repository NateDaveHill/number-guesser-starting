let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//function that generates a random num between 0 - 9

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// compares the different inputs and sees which one is closer to the target

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {

    let userDiff = generateTarget - humanGuess;
    let botDiff = generateTarget - computerGuess;
    
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

// allows us to change the input from true & false to "human" & "computer"

let input;

if (compareGuesses() === true) {
    input = "human";
} else {
    input = "computer";
};

// updates scoreboard by increasing the score depending on who wins (++)

const updateScore = (input) => {
    let newHumanScore;
    let newComputerScore;

    if (input === "human") {
        let newHumanScore = humanScore++;
        return newHumanScore;
    } else if (input === "computer") {
        let newComputerScore = computerScore++;
        return newComputerScore;
    } else {
        console.log("There is no winner.");
    };
}

// updates the rounds by increasing the currentRound after each run through (++)

function advanceRoundNumber() {
    if ((input === true) || (input === false)) {
        return currentRoundNumber ++;
    };
}

// calling the functions to test how they are working so far

console.log(input);
// compareGuesses(3, 3, generateTarget()); //seems to work
// console.log(updateScore("human")); // returns There is no winner
// console.log(advanceRoundNumber()); // undefined
// console.log(humanScore, computerScore, currentRoundNumber); //score stays the same
