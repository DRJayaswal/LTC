/**
 * Function to convert an array of digits into a single integer.
 *
 * @param {number[]} digitArray - The array of digits.
 * @returns {BigInt} - The integer represented by the digits.
 */
const array_number = (digitArray) => {
    let numberString = ""; // Initialize an empty string to build the number.
    for (const digit of digitArray) {
        numberString += String(digit); // Concatenate each digit to form the complete number string.
    }
    return BigInt(numberString); // Convert the string to BigInt and return.
};

/**
 * Function to convert a BigInt into an array of its digits.
 *
 * @param {BigInt} number - The BigInt to convert.
 * @returns {number[]} - The array of digits of the number.
 */
const number_array = (number) => {
    let digitArray = []; // Initialize an empty array to store digits.
    while (number > 0n) {
        digitArray.push(Number(number % 10n)); // Push the last digit to the array.
        number = number / 10n; // Remove the last digit from the number.
    }
    return digitArray; // Return the array of digits.
};

/**
 * Function to reverse an array.
 *
 * @param {number[]} array - The array to reverse.
 * @returns {number[]} - The reversed array.
 */
const reverse = (array) => {
    let newArray = []; // Initialize an empty array to hold the reversed array.
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]); // Push each element in reverse order.
    }
    return newArray; // Return the reversed array.
};

/**
 * Function to add one to the number represented by an array of digits.
 *
 * @param {number[]} digits - The array of digits representing the number.
 * @returns {number[]} - The new array of digits representing the number after adding one.
 */
var plusOne = function (digits) {
    // Convert the array of digits to a number, add one, and then convert back to an array of digits.
    return reverse(number_array(array_number(digits) + 1n));
};