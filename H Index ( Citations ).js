/**
 * Helper function to reverse an array.
 * 
 * @param {number[]} array - The array to be reversed.
 * @returns {number[]} - The reversed array.
 */
const reverse = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

/**
 * Function to calculate the h-index of a researcher based on citation counts.
 * 
 * @param {number[]} citations - An array representing the number of citations for each publication.
 * @returns {number} - The h-index value.
 */
var hIndex = function (citations) {
    // Sort the citations array in descending order.
    citations.sort((a, b) => b - a);

    let h = 0; // Initialize the h-index to 0.

    // Traverse the sorted citations array.
    for (let i = 0; i < citations.length; i++) {
        // Check if the citation count is greater than or equal to the current index + 1.
        if (citations[i] >= i + 1) {
            h = i + 1; // Update the h-index to the current index + 1.
        } else {
            break; // Break out of the loop if the condition fails.
        }
    }

    return h; // Return the h-index.
};