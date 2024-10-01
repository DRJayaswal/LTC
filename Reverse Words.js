/**
 * Function to reverse a single word.
 * 
 * @param {string} word - The word to reverse.
 * @returns {string} - The reversed word.
 */
const reverseString = function (word) {
    let reversedWord = ""; // Initialize an empty string to store the reversed word.

    // Loop through the word from the end to the beginning.
    for (let i = word.length - 1; i >= 0; i--) {
        if (word[i] !== " ") { // Check if the character is not a space.
            reversedWord += word[i]; // Append the character to the reversed word.
        }
    }

    return reversedWord; // Return the reversed word.
};

/**
 * Function to reverse the order of words in a sentence.
 * 
 * @param {string} sentence - The sentence whose words need to be reversed.
 * @returns {string} - The sentence with reversed words.
 */
var reverseWords = function (sentence) {
    let currentWord = ""; // Initialize a string to store the current word.
    let reversedWordsArray = []; // Initialize an array to store reversed words.

    // Iterate over the sentence from the end to the beginning.
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] !== " ") { // If the character is not a space, build the current word.
            currentWord += sentence[i];
        } else {
            // If a space is encountered and the current word is not empty.
            if (currentWord !== "") {
                // Reverse the current word and add it to the array.
                reversedWordsArray.push(reverseString(currentWord));
                currentWord = ""; // Reset the current word to start a new one.
            }
        }

        // Handle the case where the loop is at the start of the sentence (i.e., the last word).
        if (i === 0 && currentWord !== "") {
            reversedWordsArray.push(reverseString(currentWord));
        }
    }

    let resultSentence = ""; // Initialize a string to store the final reversed sentence.

    // Loop through the array of reversed words to construct the final sentence.
    for (let i = 0; i < reversedWordsArray.length; i++) {
        resultSentence += reversedWordsArray[i]; // Add each reversed word to the final sentence.

        // Add a separator ' ' between words, but not after the last word.
        if (i !== reversedWordsArray.length - 1) {
            resultSentence += " ";
        }
    }

    return resultSentence; // Return the final reversed sentence.
};