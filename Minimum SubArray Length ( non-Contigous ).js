/**
 * Calculates the sum of an array.
 * 
 * @param {number[]} array - An array of numbers to be summed.
 * @returns {number} The total sum of the array.
 */
const array_to_sum = (array) => {
    var sum = 0; // Initialize sum to 0
    // Iterate through the array and accumulate the sum
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum; // Return the total sum of the array
}

/**
 * Finds the minimum length of a subarray whose sum is at least 'target'.
 * 
 * @param {number} target - The target sum that needs to be met or exceeded.
 * @param {number[]} array - An array of numbers to select elements from.
 * @returns {number} The minimum length of the subarray whose sum is at least target,
 *                   or 0 if no such subarray exists.
 */
var minSubArrayLen = (target, array) => {
    const answer = []; // Initialize an empty array to store selected elements
    // Sort the array in ascending order
    array.sort((a, b) => { return a - b });

    // Iterate through the array from the largest to smallest element
    for (let i = array.length - 1; i >= 0; i--) {
        // Check if the current element is equal to the target
        if (array[i] == target) {
            return 1; // If equal, return length 1 (single element)
        }
        // Add the current element to the answer array
        answer.push(array[i]);
        // Check if the sum of selected elements meets or exceeds the target
        if (array_to_sum(answer) >= target) {
            return answer.length; // Return the number of elements in the answer array
        }
    }
    // If the sum is less than the target, return 0
    return array_to_sum(answer) >= target ? answer.length : 0;
}
