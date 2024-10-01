/**
 * Function to calculate x raised to the power n (x^n).
 * 
 * @param {number} x - The base number.
 * @param {number} n - The exponent (can be positive or negative).
 * @returns {number} - The result of x raised to the power n.
 */
var myPow = function (x, n) {
    // If the exponent is negative, invert the base and make the exponent positive
    if (n < 0) return 1 / myPow(x, -n);
    
    // Base case: anything raised to the power of 0 is 1
    if (n === 0) return 1;

    // Base case: anything raised to the power of 1 is itself
    if (n === 1) return x;

    // Recursively calculate the power for half of n
    let halfPow = myPow(x, Math.floor(n / 2));

    // If n is even, multiply the result of half power by itself
    // If n is odd, multiply an extra x to account for the odd power
    return (n % 2 === 0) ? halfPow * halfPow : x * halfPow * halfPow;
};