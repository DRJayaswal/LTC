/**
 * Function to find the first occurrence of a substring 'small' in a string 'large'.
 * 
 * @param {string} large - The string in which to search for the substring.
 * @param {string} small - The substring to search for.
 * @returns {number} - The index of the first occurrence of 'small' in 'large', or -1 if not found.
 */
var strStr = function (large, small) {
    // If the substring is longer than the string, return -1
    if (small.length > large.length) return -1;

    // If the substring is empty, return 0 (by definition of the problem)
    if (small.length === 0) return 0;

    // Initialize counter to store the index where the substring starts
    let counter = -1;

    // Loop through the 'large' string
    for (let i = 0; i < large.length; i++) {
        // Check if the current character in 'large' matches the first character of 'small'
        if (large[i] == small[0]) {
            counter = i; // Potential starting point
            let z = i;

            // Loop through 'small' and check if it matches the substring in 'large'
            for (let j = 0; j < small.length; j++) {
                if (large[z] !== small[j]) {
                    counter = -1; // Reset if mismatch occurs
                    break;
                }
                z++; // Move to the next character in 'large'
            }

            // If a valid match is found, return the starting index
            if (counter != -1) return counter;
        }
    }

    // Return -1 if no match is found
    return counter;
};

// Optimized Version
/**
 * Optimized version of the strStr function.
 * 
 * @param {string} large - The string in which to search for the substring.
 * @param {string} small - The substring to search for.
 * @returns {number} - The index of the first occurrence of 'small' in 'large', or -1 if not found.
 */
var strStrOptimized = function (large, small) {
    // If the substring is longer than the string, return -1
    if (small.length > large.length) return -1;

    // If the substring is empty, return 0
    if (small.length === 0) return 0;

    // Loop through 'large' only until there's enough space left for 'small'
    for (let i = 0; i <= large.length - small.length; i++) {
        let match = true; // Flag to check if 'small' matches

        // Check character-by-character if 'small' matches a portion of 'large'
        for (let j = 0; j < small.length; j++) {
            if (large[i + j] !== small[j]) {
                match = false;
                break; // Break early if a mismatch is found
            }
        }

        // If a match is found, return the starting index
        if (match) return i;
    }

    // Return -1 if no match is found
    return -1;
};