/**
 * Function to convert a Roman numeral string to an integer.
 *
 * @param {string} romanString - The Roman numeral string to convert.
 * @returns {number} - The equivalent integer value of the Roman numeral.
 */
const romanToInt = function (romanString) {
    // Mapping Roman numeral characters to their integer values
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Initialize a variable to hold the total sum
    let sum = 0;

    // Loop through the Roman numeral string
    for (let i = 0; i < romanString.length; i++) {
        // Get the value of the current Roman numeral
        const current = romanNumerals[romanString[i]];
        // Get the value of the next Roman numeral (if exists)
        const next = romanNumerals[romanString[i + 1]];

        // If the current value is less than the next one, subtract it
        if (next && current < next) {
            sum -= current;
        } else {
            // Otherwise, add the current value
            sum += current;
        }
    }

    // Return the calculated sum
    return sum;
};