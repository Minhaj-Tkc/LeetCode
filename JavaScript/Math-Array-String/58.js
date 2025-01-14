// 1313. Decompress Run-Length Encoded List


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i + 1];
        result.push(...Array(freq).fill(val));
    }
    return result;
};

// Example usage:
let nums1 = [1, 2, 3, 4];
let nums2 = [1, 1, 2, 3];

console.log(decompressRLElist(nums1)); // Output: [2, 4, 4, 4]
console.log(decompressRLElist(nums2)); // Output: [1, 3, 3]
