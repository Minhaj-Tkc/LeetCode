// 961. N-Repeated Element in Size 2N Array


/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) {
            return num; // Return the repeated element
        }
        seen.add(num); // Add the number to the set
    }
};

// Example Usage
console.log(repeatedNTimes([1, 2, 3, 3])); // Output: 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // Output: 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // Output: 5
