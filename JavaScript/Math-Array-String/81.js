// 575. Distribute Candies

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let maxAllowed = candyType.length / 2;
    let uniqueCandies = new Set(candyType).size;
    return Math.min(uniqueCandies, maxAllowed);
};

// Test cases
console.log(distributeCandies([1,1,2,2,3,3])); // Output: 3
console.log(distributeCandies([1,1,2,3]));     // Output: 2
console.log(distributeCandies([6,6,6,6]));     // Output: 1
