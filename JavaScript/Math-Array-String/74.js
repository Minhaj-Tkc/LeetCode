// 2215. Find the Difference of Two Arrays

var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    
    let diff1 = [...set1].filter(num => !set2.has(num));
    let diff2 = [...set2].filter(num => !set1.has(num));
    
    return [diff1, diff2];
};

// Example test cases
console.log(findDifference([1,2,3], [2,4,6])); // Output: [[1,3],[4,6]]
console.log(findDifference([1,2,3,3], [1,1,2,2])); // Output: [[3],[]]
