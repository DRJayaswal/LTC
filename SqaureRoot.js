/**
 * Function to compute the integer square root of a non-negative integer x.
 * It uses a binary search approach to find the square root.
 *
 * @param {number} x - The input non-negative integer.
 * @returns {number} - The integer part of the square root of x.
 */
var mySqrt = function (x) {
    let left = 0; // Initialize the left boundary of the search space.
    let right = x; // Initialize the right boundary of the search space.
    let ans = 0; // Variable to store the result (integer square root).

    // Binary search to find the square root.
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Calculate the middle point.
        
        if (mid * mid > x) {
            // If mid squared is greater than x, move the right boundary.
            right = mid - 1;
        } else if (mid * mid < x) {
            // If mid squared is less than x, move the left boundary.
            ans = mid; // Update the answer to the closest integer square root so far.
            left = mid + 1;
        } else {
            // If mid squared equals x, mid is the exact square root.
            return mid;
        }
    }
    // Return the answer which is the integer square root of x.
    return ans;
};