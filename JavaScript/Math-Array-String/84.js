// 283. Move Zeroes


var moveZeroes = function(nums) {
    let nonZeroIndex = 0; // Pointer to track the position of non-zero elements

    // Move all non-zero elements to the front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]]; // Swap
            nonZeroIndex++;
        }
    }
};


let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);
