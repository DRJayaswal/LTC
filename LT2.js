/* eslint-disable no-unused-vars */
// Function to find the length of the last word in a given string
var lengthOfLastWord = function (inputString) {
    let length = 0; // Variable to keep track of the length of the last word

    // Loop through the string in reverse order, starting from the last character
    for (let i = inputString.length - 1; i >= 0; i--) {
        // If a non-space character is found after counting some characters, return the length when a space is encountered
        if (length > 0) {
            if (inputString[i] === " ") {
                return length;
            }
        }

        // Increment the length counter when a non-space character is encountered
        if (inputString[i] !== " ") {
            length++;
        }
    }

    // If the loop completes and the last word was the only or the last word, return the length
    return length;
};