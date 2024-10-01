/**
 * Function to count the number of trailing zeroes in the factorial of a given number `n`.
 * 
 * @param {number} n - The input number for which we need to find the number of trailing zeroes in its factorial.
 * @returns {number} - The count of trailing zeroes in `n!`.
 */
var trailingZeroes = function (n) {
    let counter = 0;

    // We keep dividing n by 5 and adding the result to the counter.
    // This counts how many times 5 is a factor in the numbers from 1 to n.
    while (n >= 5) {
        n = Math.floor(n / 5);
        counter += n; // Add how many multiples of 5 are in the current range.
    }

    return counter; // Return the total count of trailing zeroes.
};