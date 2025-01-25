// 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers


/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    // Find the maximum digit in the string
    let maxDigit = 0;
    for (let char of n) {
        maxDigit = Math.max(maxDigit, parseInt(char));
    }
    return maxDigit;
};

// Examples
console.log(minPartitions("32"));           // Output: 3
console.log(minPartitions("82734"));        // Output: 8
console.log(minPartitions("27346209830709182346")); // Output: 9
