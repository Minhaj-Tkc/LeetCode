// 169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    // Phase 1: Find the candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Phase 2: Return the candidate
    return candidate;
};

// Examples
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

