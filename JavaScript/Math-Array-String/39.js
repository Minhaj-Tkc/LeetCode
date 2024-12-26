// 35. Search Insert Position


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Target found, return index
        } else if (nums[mid] < target) {
            left = mid + 1; // Move to the right half
        } else {
            right = mid - 1; // Move to the left half
        }
    }

    return left; // Target not found, return the insert position
};


console.log(searchInsert([1,3,5,6], 2)); // Output 1
console.log(searchInsert([1,3,5,6], 5)); // Output 2
