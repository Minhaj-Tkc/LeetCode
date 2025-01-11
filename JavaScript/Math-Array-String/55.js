// 1304. Find N Unique Integers Sum up to Zero


/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let result = [];
    // Add pairs of positive and negative numbers
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        result.push(i);
        result.push(-i);
    }
    // If n is odd, add 0 to the array
    if (n % 2 !== 0) {
        result.push(0);
    }
    return result;
};


console.log(sumZero(5)); // Output: [1, -1, 2, -2, 0] (or any valid array with sum 0)
