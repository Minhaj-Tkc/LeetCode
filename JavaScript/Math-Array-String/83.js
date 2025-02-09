// 26. Remove Duplicates from Sorted Array


var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1; // Pointer for unique elements

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // If the current element is different from the previous
            nums[k] = nums[i]; // Move the unique element forward
            k++; // Increase unique count
        }
    }

    return k;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums);
console.log(k, nums.slice(0, k)); // Output: 5 [0, 1, 2, 3, 4]
