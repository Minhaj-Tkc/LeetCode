// 2441. Largest Positive Integer That Exists With Its Negative

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let numSet = new Set(nums); // Store numbers for quick lookup
    let maxK = -1; // Initialize maxK as -1

    for (let num of nums) {
        if (num > 0 && numSet.has(-num)) { // Check if -num exists
            maxK = Math.max(maxK, num); // Update maxK if num is larger
        }
    }

    return maxK;
};

// Test Cases
console.log(findMaxK([-1, 2, -3, 3])); // Output: 3
console.log(findMaxK([-1, 10, 6, 7, -7, 1])); // Output: 7
console.log(findMaxK([-10, 8, 6, 7, -2, -3])); // Output: -1

