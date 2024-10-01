/**
 * Function to convert a string into a zigzag pattern on a given number of rows.
 * 
 * The characters are arranged in a zigzag pattern moving downwards and then diagonally upwards. 
 * The output is a concatenation of characters from each row.
 * 
 * @param {string} s - The input string to be converted.
 * @param {number} numRows - The number of rows in the zigzag pattern.
 * @returns {string} - The string formed by reading the characters in zigzag order.
 */
var convert = function(s, numRows) {
    // If the number of rows is 1 or greater than the length of the string, return the string as is.
    if (numRows === 1 || numRows >= s.length) return s;

    let rows = new Array(Math.min(numRows, s.length)).fill(""); // Create an array to hold the rows.
    let curRow = 0; // Variable to track the current row.
    let goingDown = false; // Boolean to track the direction of traversal.

    // Iterate through each character in the input string.
    for (let char of s) {
        rows[curRow] += char; // Add the character to the current row.
        // Change direction if we reach the top or bottom row.
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown; // Toggle direction.
        }
        // Move to the next row based on the direction.
        curRow += goingDown ? 1 : -1;
    }

    // Concatenate all rows and return the resulting string.
    return rows.join(""); 
};