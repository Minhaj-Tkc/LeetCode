// 704. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Calculate the middle index

        if (nums[mid] === target) {
            return mid; // Target found, return the index
        } else if (nums[mid] < target) {
            left = mid + 1; // Narrow the search to the right half
        } else {
            right = mid - 1; // Narrow the search to the left half
        }
    }

    return -1; // Target not found
};


console.log(search([-1,0,3,5,9,12], 9));
