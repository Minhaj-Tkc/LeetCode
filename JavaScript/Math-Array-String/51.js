// 2864. Maximum Odd Binary Number


/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    // Count the number of '1's and '0's in the string
    const ones = s.split('1').length - 1;
    const zeros = s.split('0').length - 1;
    
    // Construct the result:
    // - Place (ones - 1) '1's at the beginning
    // - Place all '0's in the middle
    // - Place the last '1' at the end to make it odd
    return '1'.repeat(ones - 1) + '0'.repeat(zeros) + '1';
};

// Example usage
console.log(maximumOddBinaryNumber("010"));  // Output: "001"
console.log(maximumOddBinaryNumber("0101")); // Output: "1001"
