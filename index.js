const Word = require("./Word");
const words = require("./words");
const inquirer = require("inquirer");
// Randomly selects a word and uses the Word constructor to store it

function runGame() {
    console.log("Guess the movie from OMDB's top 250 movies!")
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const solution = new Word(randomWord);
    let numGuessesRemaining = (randomWord).length + 4;

    // Prompts the user for each guess and keeps track of the user's remaining guesses
    function runTurn() {
        // display the blanks for each letter of solution of page load
        console.log(solution.buildString());
        // let user know their number of remaining guesses
        console.log("You have " + (numGuessesRemaining + 1) + " guesses remaining");

        inquirer.prompt(
            {
                name: "guess",
                type: "input",
                message: "Guess a letter!",
            }
        ).then(answer => {
            solution.guessLetter(answer.guess);
            let gotItRight = solution.guessLetter(answer.guess);
            const solutionString = solution.buildString();
            console.log(solutionString);
            // check if we won
            if (!solutionString.includes("_")) {
                console.log('You win!')
                // ask user if they want to play again
                askToReplay();
            } else {
                // check if we are out of guesses
                if (numGuessesRemaining <= 0) {
                    console.log("You lost! GAME OVER")
                    console.log("The answer was " + randomWord)
                    askToReplay();
                }
                // if we aren't
                else {
                    // if we guessed correctly, runTurn again
                    if (gotItRight) {
                        runTurn();
                    }
                    // if we guessed incorrectly
                    else {
                        // decrement our number of guesses
                        numGuessesRemaining--;
                        // prompt user again
                        runTurn();
                    }
                }
            }
        }).catch(error => {
            if (error.isTtyError) {
                console.log("Prompt cannot be rendered in this environment")
            } else {
                console.log(error);
            }
        })
    }

    function askToReplay () {
        inquirer.prompt({
            name: "playAgain",
            type: "confirm",
            message: "Do You want to play again?",
        }).then(answer => {
            if (answer.playAgain) {
                runGame();
            } else {
                console.log("Come back soon!");
            }
        })
    }

    runTurn();
}

runGame();