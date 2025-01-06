// 66. Plus One


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Start from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // Increment the current digit if it's less than 9
            digits[i]++;
            return digits;
        }
        // If the digit is 9, set it to 0
        digits[i] = 0;
    }
    // If all digits are 9, prepend 1 to the array
    digits.unshift(1);
    return digits;
};

// Test cases
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9])); // Output: [1, 0]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
