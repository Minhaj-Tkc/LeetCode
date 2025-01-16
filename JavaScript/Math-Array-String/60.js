// 2540. Minimum Common Value
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let i = 0, j = 0;

    // Traverse both arrays
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i]; // Return the common element
        } else if (nums1[i] < nums2[j]) {
            i++; // Move pointer in nums1
        } else {
            j++; // Move pointer in nums2
        }
    }

    // If no common element is found
    return -1;
};

// Example usage:
console.log(getCommon([1, 2, 3], [2, 4])); // Output: 2
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5])); // Output: 2
console.log(getCommon([1, 5, 7], [2, 3, 8])); // Output: -1
