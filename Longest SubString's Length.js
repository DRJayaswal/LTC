/**
 * Function to find the longest substring without repeating characters in a given string.
 * 
 * @param {string} string - The input string to be evaluated.
 * @returns {string} - The longest substring without repeating characters.
 */
var longestSubStringLength = (string) => {
    // Initialize two variables to keep track of the current substring
    var current_sub_string = "";   // The substring being evaluated
    var previous_sub_string = "";   // The longest substring found so far

    // Iterate through each character in the input string
    for (var i = 0; i < string.length; i++) {
        // If the current substring is empty, start a new substring with the current character
        if (current_sub_string === "") {
            current_sub_string += string[i];
        }
        
        // Check if the current character is already in the current substring
        // and if the previous substring is shorter or equal to the current one
        if (current_sub_string.includes(string[i]) && previous_sub_string.length <= current_sub_string.length) {
            // Update the previous substring to the current one
            previous_sub_string = current_sub_string;

            // Reset the current substring to start with the current character
            current_sub_string = "";
            current_sub_string += string[i];
        } else {
            // Add the current character to the current substring
            current_sub_string += string[i];
        }
    }

    // Return the longest substring found without repeating characters
    return previous_sub_string;
};