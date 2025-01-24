// 442. Find All Duplicates in an Array


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // Map the value to its corresponding index
        
        if (nums[index] < 0) {
            // If already marked negative, it means this is a duplicate
            result.push(Math.abs(nums[i]));
        } else {
            // Mark the corresponding index as visited by making it negative
            nums[index] = -nums[index];
        }
    }
    
    return result;
};

// Example usage
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]
console.log(findDuplicates([1, 1, 2]));                // Output: [1]
console.log(findDuplicates([1]));                      // Output: []
