// 643. Maximum Average Subarray I

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // Calculate the sum of the first 'k' elements
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    // Initialize maxSum with the sum of the first window
    let maxSum = currentSum;

    // Slide the window across the array
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    // Return the maximum average
    return maxSum / k;
};

// Example 1
const nums1 = [1, 12, -5, -6, 50, 3];
const k1 = 4;
console.log(findMaxAverage(nums1, k1)); // Output: 12.75

// Example 2
const nums2 = [5];
const k2 = 1;
console.log(findMaxAverage(nums2, k2)); // Output: 5.0
