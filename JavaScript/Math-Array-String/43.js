// 2544. Alternating Digit Sum


/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    // Convert the number to a string to access each digit
    let digits = n.toString();
    let total = 0;

    // Iterate through the digits with their indices
    for (let i = 0; i < digits.length; i++) {
        // Convert the current digit to a number
        let digit = parseInt(digits[i]);
        
        // Apply alternating signs: positive for even indices, negative for odd
        if (i % 2 === 0) {
            total += digit; // Add for even index
        } else {
            total -= digit; // Subtract for odd index
        }
    }

    return total; // Return the calculated sum
};

// Example usage
console.log(alternateDigitSum(521)); // Output: 4
console.log(alternateDigitSum(111)); // Output: 1
