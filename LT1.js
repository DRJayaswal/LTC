/* eslint-disable no-unused-vars */

// Function to convert a Roman numeral string to an integer
const romanToInt = function (romanString) {
    // Object to map Roman numeral characters to their integer values
    var romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Array to store the integer values corresponding to the Roman numerals in the string
    const integerValues = [];

    // Loop through the Roman numeral string, except for the last character
    for (let i = 0; i < romanString.length - 1; i++) {
        // Check if the current Roman numeral is less than the next one
        if (romanNumerals[romanString[i]] < romanNumerals[romanString[i + 1]]) {
            // If so, subtract the value (by pushing a negative value into the array)
            integerValues.push(-romanNumerals[romanString[i]]);
        } else {
            // Otherwise, just push the positive value
            integerValues.push(romanNumerals[romanString[i]]);
        }
    }

    // Add the integer value of the last Roman numeral in the string
    integerValues.push(romanNumerals[romanString[romanString.length - 1]]);

    // Calculate the sum of all the integer values in the array
    let sum = 0;
    for (const value of integerValues) {
        sum += value;
    }

    // Return the total sum, which is the equivalent integer value of the Roman numeral string
    return sum;
};