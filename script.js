let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

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

let input = "";

if (compareGuesses() === true) {
    let input = "human";
} else {
    let input = "computer";
};

const updateScore = (input) => {
    if (input === "human") {
        humanScore ++;
    } else if (input === "computer") {
        computerScore ++;
    } else {
        console.log("There is no winner.");
    };
}

function advanceRoundNumber() {
    if ((input === true) || (input === false)) {
        currentRoundNumber ++;
    };
}

console.log(compareGuesses(3, 3, generateTarget()));
console.log(updateScore());
console.log(advanceRoundNumber());
console.log(humanScore, computerScore, currentRoundNumber);
