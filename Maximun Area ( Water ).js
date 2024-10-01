/**
 * Function to find the maximum area of water that can be trapped between two vertical lines.
 * 
 * Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai),
 * this function finds two lines that, together with the x-axis, form a container that can hold the most water.
 * 
 * @param {number[]} height - An array of non-negative integers representing the heights of the vertical lines.
 * @returns {number} - The maximum area of water that can be trapped.
 */
const maxArea = function(height) {
    let water_amount = 0; // Initialize variable to store the maximum water amount.
    let i = 0; // Left pointer starting at the beginning of the height array.
    let j = height.length - 1; // Right pointer starting at the end of the height array.

    // Loop until the two pointers meet.
    while (i < j) {
        let left = height[i]; // Height at the left pointer.
        let right = height[j]; // Height at the right pointer.
        const distance = j - i; // Distance between the two pointers.
        let small = Math.min(left, right); // Minimum height between the two lines.

        // Calculate the area and update water_amount if it's larger than the current maximum.
        if (water_amount < distance * small) {
            water_amount = distance * small;
        }

        // Move the pointer with the smaller height inward.
        if (left < right) {
            i++; // Move the left pointer to the right.
        } else {
            j--; // Move the right pointer to the left.
        }
    }

    return water_amount; // Return the maximum water amount.
};