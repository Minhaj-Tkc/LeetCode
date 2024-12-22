// 191. Number of 1 Bits

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1; // Check if the least significant bit is set
        n = n >>> 1;    // Use unsigned right shift to avoid negative numbers
    }
    return count;
};

// Example usage:
console.log(hammingWeight(11)); // Output: 3 (binary: 1011)
console.log(hammingWeight(128)); // Output: 1 (binary: 10000000)
