// 2574. Left and Right Sum Differences


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length;
    const leftSum = new Array(n).fill(0);
    const rightSum = new Array(n).fill(0);
    const answer = new Array(n).fill(0);

    // Calculate leftSum
    for (let i = 1; i < n; i++) {
        leftSum[i] = leftSum[i - 1] + nums[i - 1];
    }

    // Calculate rightSum
    for (let i = n - 2; i >= 0; i--) {
        rightSum[i] = rightSum[i + 1] + nums[i + 1];
    }

    // Calculate answer
    for (let i = 0; i < n; i++) {
        answer[i] = Math.abs(leftSum[i] - rightSum[i]);
    }

    return answer;
};

// Example usage
const nums1 = [10, 4, 8, 3];
console.log(leftRightDifference(nums1)); // Output: [15, 1, 11, 22]

const nums2 = [1];
console.log(leftRightDifference(nums2)); // Output: [0]
