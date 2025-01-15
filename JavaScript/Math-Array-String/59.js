// 217. Contains Duplicate


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Create a set to track seen elements
    let seen = new Set();
    
    // Iterate through the array
    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Duplicate found
        }
        seen.add(num); // Add the number to the set
    }
    
    return false; // No duplicates found
};

// Example Usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true
