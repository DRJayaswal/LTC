/**
 * Function to determine if `s` is a subsequence of `t` using O(n^2) time complexity.
 * 
 * A subsequence is a sequence that appears in the same relative order but not necessarily contiguous.
 * This function checks if all characters of string `s` can be found in string `t` in the same order.
 * 
 * @param {string} s - The string to check if it is a subsequence.
 * @param {string} t - The string to check against.
 * @returns {boolean} - Returns true if `s` is a subsequence of `t`, false otherwise.
 */
var isSubsequenceN2 = function(s, t) {
    let count = 0; // Counter for matched characters in s.

    // Iterate through each character in t.
    for (const i in t) {
        // Iterate through each character in s.
        for (const j in s) {
            // If all characters in s are matched, return true.
            if (count === s.length) return true; 
            // Increment count if characters match.
            if (t[i] === s[j]) {
                count++;
            }
        }
    }

    // Return true if all characters in s are matched, otherwise false.
    return count === s.length;
};

/**
 * Function to determine if `s` is a subsequence of `t` using O(n) time complexity.
 * 
 * A subsequence is a sequence that appears in the same relative order but not necessarily contiguous.
 * This function checks if all characters of string `s` can be found in string `t` in the same order using a two-pointer technique.
 * 
 * @param {string} testString - The string to check if it is a subsequence.
 * @param {string} string - The string to check against.
 * @returns {boolean} - Returns true if `testString` is a subsequence of `string`, false otherwise.
 */
var isSubsequenceN = function(testString, string) {
    let stringI = 0; // Pointer for the string being checked against.
    let testStringI = 0; // Pointer for the test string.

    // Traverse both strings using the two pointers.
    while (stringI < string.length && testStringI < testString.length) {
        // If characters match, move the pointer of the test string forward.
        if (testString[testStringI] === string[stringI]) {
            testStringI++;
        }
        // Always move the pointer of the string being checked against forward.
        stringI++;
    }

    // Return true if all characters in testString are matched, otherwise false.
    return testStringI === testString.length;
};