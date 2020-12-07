let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let input;

// Write your code below:

//function that generates a random num between 0 - 9

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// compares the different inputs and sees which one is closer to the target

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {

    let userDiff = generateTarget - humanGuess;
    let botDiff = generateTarget - computerGuess;
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

// allows us to change the input from true & false to "human" & "computer"

/*
function changeInput() {
    if (compareGuesses() === true) {
        input = "human";
    } else {
        input = "computer";
    };
};
*/

// updates scoreboard by increasing the score depending on who wins (++)

const updateScore = () => {

    if (compareGuesses()) {
        return humanScore += 1;
        
    } else if (!compareGuesses()) {
        return computerScore += 1;

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

// console.log(input);                                                      // var never changes - it should shift between "computer" & "human"
// console.log(compareGuesses(3, 3, generateTarget()));                     // seems to work
// console.log(updateScore());                                              // returns There is no winner
 console.log(advanceRoundNumber());                                       // undefined
// console.log(humanScore, computerScore, currentRoundNumber);              // score stays the same
