// 2859. Sum of Values at Indices With K Set Bits


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    // Helper function to count the number of set bits (1's) in a binary representation
    const countSetBits = (n) => {
        return n.toString(2).split('1').length - 1;
    };

    let totalSum = 0;

    // Iterate over indices and check if the count of set bits matches k
    for (let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            totalSum += nums[i];
        }
    }

    return totalSum;
};

// Example 1
const nums1 = [5, 10, 1, 5, 2];
const k1 = 1;
console.log(sumIndicesWithKSetBits(nums1, k1)); // Output: 13

// Example 2
const nums2 = [4, 3, 2, 1];
const k2 = 2;
console.log(sumIndicesWithKSetBits(nums2, k2)); // Output: 1
