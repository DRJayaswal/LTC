/* eslint-disable no-unused-vars */
// Function to find the common prefix between two strings
const findCommonPrefix = (str1, str2) => {
    let commonPrefix = ""; // Initialize a string to store the common prefix
    let index = 0; // Initialize an index to traverse both strings

    // Loop until we reach the end of either string
    while (index < str1.length && index < str2.length) {
        // If characters at the current index match, add to the common prefix
        if (str1[index] === str2[index]) {
            commonPrefix += str1[index];
        } else {
            // If characters don't match, return the common prefix found so far
            return commonPrefix;
        }
        index++; // Move to the next index
    }

    // Return the common prefix after the loop ends
    return commonPrefix;
};

// Function to find the longest common prefix among an array of strings
var longestCommonPrefix = function (stringsArray) {
    // Handle edge cases where the array is empty or has only one string
    if (stringsArray.length === 0) {
        return ""; // No common prefix if the array is empty
    }
    if (stringsArray.length === 1) {
        return stringsArray[0]; // The single string is the common prefix
    }

    // Initialize the prefix using the first two strings in the array
    let prefix = findCommonPrefix(stringsArray[0], stringsArray[1]);
    let i = 2; // Start checking from the third string

    // Loop through the rest of the array to refine the common prefix
    while (i < stringsArray.length) {
        // Update the prefix by comparing it with the next string in the array
        prefix = findCommonPrefix(prefix, stringsArray[i]);
        i++; // Move to the next string
    }

    // Return the longest common prefix found
    return prefix;
};
