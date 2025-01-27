// 2190. Most Frequent Number Following Key In an Array


/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    const count = new Map();

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === key) {
            const target = nums[i + 1];
            count.set(target, (count.get(target) || 0) + 1);
        }
    }

    let maxTarget = null;
    let maxCount = 0;

    for (const [target, freq] of count.entries()) {
        if (freq > maxCount) {
            maxCount = freq;
            maxTarget = target;
        }
    }

    return maxTarget;
};

// Example usage:
const nums1 = [1, 100, 200, 1, 100];
const key1 = 1;
console.log(mostFrequent(nums1, key1)); // Output: 100

const nums2 = [2, 2, 2, 2, 3];
const key2 = 2;
console.log(mostFrequent(nums2, key2)); // Output: 2
