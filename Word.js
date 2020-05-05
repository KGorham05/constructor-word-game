const Letter = require("./Letter");

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word(word) {
    // An array of new Letter objects representing the letters of the underlying word
    this.letters = word.split("").map((char) => {
        return new Letter(char);
    })
    // A function that returns a string representing the word. 
    this.buildString = function() {
        // This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
        return this.letters.map(function(letter) {
            return letter.displayUnderscoreOrCharacter();
        }).join(" ");
    }
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
    this.guessLetter = function(char) {
        
        this.letters.forEach(letter => {
            letter.checkForMatch(char);
        });
    }
}

// let testWord = new Word("apple");
// console.log(testWord.buildString());
// testWord.guessLetter("a");
// console.log(testWord.buildString());

module.exports = Word;