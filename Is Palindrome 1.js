/**
 * Function to reverse a string.
 * 
 * @param {string} s - The string to reverse.
 * @returns {string} - The reversed string.
 */
const reverse = (s) => {
    let x = ""; // Initialize an empty string to store the reversed string.
    for (let i = s.length - 1; i >= 0; i--) {
        x += s[i]; // Append characters from the end of the string to the new string.
    }
    return x; // Return the reversed string.
};

/**
 * Function to determine if an integer is a palindrome.
 * 
 * An integer is considered a palindrome if it reads the same backward as forward.
 * 
 * @param {number} x - The integer to check for palindrome properties.
 * @returns {boolean} - Returns true if the integer is a palindrome, false otherwise.
 */
var isPalindrome = function (x) {
    // Negative numbers are not palindromes
    if (x < 0) {
        return false;
    } else if (x < 10) {
        return true; // Single-digit numbers are palindromes
    }
    
    const xS = String(x); // Convert the integer to a string.
    let firstHalf = ""; // String to store the first half of the number.
    let secondHalf = ""; // String to store the second half of the number.
    
    // Loop through the string representation of the number
    for (let i = 0; i < xS.length; i++) {
        if (i < Math.floor(xS.length / 2)) {
            firstHalf += xS[i]; // Build the first half
        } else if (i > Math.floor((xS.length - 1) / 2)) {
            secondHalf += xS[i]; // Build the second half
        }
    }
    
    // Compare the first half with the reversed second half
    return firstHalf === reverse(secondHalf);
};