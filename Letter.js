// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
function Letter(char) {
    // A string value to store the underlying character for the letter
    this.underlyingChar = char;
    // A boolean value that stores whether that letter has been guessed yet
    this.hasBeenGuessed = !/[a-z1-9]/i.test(char);
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.displayUnderscoreOrCharacter = function() {
        if (this.hasBeenGuessed) {
            return this.underlyingChar;
        } else {
            return "_";
        };
    };
    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkForMatch = function(character) {
        if (this.underlyingChar === character) {
            this.hasBeenGuessed = true;
        };
    };
}

// let test = new Letter("y");
// console.log(test);
// console.log(test.underlyingChar);
// console.log(test.hasBeenGuessed);
// test.displayUnderscoreOrCharacter();
// test.checkForMatch("y");
// test.displayUnderscoreOrCharacter();
// console.log(test.hasBeenGuessed);

module.exports = Letter;
