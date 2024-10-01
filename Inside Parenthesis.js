/**
 * Function to return the last element of the stack.
 * 
 * @param {Array} stack - The stack from which to get the last element.
 * @returns {*} - The last element of the stack.
 */
function last(stack) {
    return stack[stack.length - 1];
}

/**
 * Function to determine if a string of parentheses is valid.
 * 
 * A string is considered valid if:
 * - Open brackets are closed by the same type of brackets.
 * - Open brackets are closed in the correct order.
 * 
 * @param {string} s - The input string containing parentheses.
 * @returns {boolean} - Returns true if the string is valid, false otherwise.
 */
var isValid = function (s) {
    // If the length of the string is odd, it cannot be valid
    if (s.length % 2 !== 0) {
        return false;
    }

    let stack = []; // Initialize an empty stack to keep track of opening brackets.

    // Iterate through each character in the input string
    for (const c of s) {
        switch (c) {
            case "(":
                stack.push(1); // Push a marker for "("
                break;
            case ")":
                if (last(stack) === 1) { // Check if the last opened bracket is "("
                    stack.pop(); // Remove the matching opening bracket
                } else {
                    return false; // Mismatch found
                }
                break;
            case "{":
                stack.push(2); // Push a marker for "{"
                break;
            case "}":
                if (last(stack) === 2) { // Check if the last opened bracket is "{"
                    stack.pop(); // Remove the matching opening bracket
                } else {
                    return false; // Mismatch found
                }
                break;
            case "[":
                stack.push(3); // Push a marker for "["
                break;
            case "]":
                if (last(stack) === 3) { // Check if the last opened bracket is "["
                    stack.pop(); // Remove the matching opening bracket
                } else {
                    return false; // Mismatch found
                }
                break;
            default:
                break; // Ignore other characters
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};