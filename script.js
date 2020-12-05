let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, generatedTarget) => {

    let userDiff = generatedTarget - humanGuess;
    let botDiff = generatedTarget - computerGuess;
    
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

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore ++ 1;
    } else if (winner === "computer") {
        computerScore ++ 1;
    } else {
        console.log("There is no winner.");
    };
}; 

const advanceRoundNumber = () => {
    if ((compareGuesses() === true) || (compareGuesses() === false)) {
        currentRoundNumber ++ 1;
    };
};