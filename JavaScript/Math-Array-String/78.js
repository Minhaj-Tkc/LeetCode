// 771. Jewels and Stones

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels); // Convert jewels to a Set for quick lookup
    return [...stones].filter(stone => jewelSet.has(stone)).length; // Count occurrences
};

// Example test cases
console.log(numJewelsInStones("aA", "aAAbbbb")); // Output: 3
console.log(numJewelsInStones("z", "ZZ"));       // Output: 0

