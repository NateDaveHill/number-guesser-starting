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

const updateScore = (compareGuesses) => {
    if (compareGuesses() === true) {
        humanScore ++;
    } else if (compareGuesses() === false) {
        computerScore ++;
    } else {
        console.log("There is no winner.");
    };
}; 

const advanceRoundNumber = () => {
    if ((compareGuesses() === true) || (compareGuesses() === false)) {
        currentRoundNumber ++;
    };
};

console.log(compareGuesses(1, 2, generateTarget()));
