// 2535. Difference Between Element Sum and Digit Sum of an Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
        let eSum = 0;
        let dSum = 0;

        for (let i = 0; i < nums.length; i++) {
            eSum += nums[i];
            while (nums[i] !== 0) {
                dSum += nums[i] % 10;
                nums[i] = Math.floor(nums[i] / 10);
            }
        }

        return Math.abs(dSum - eSum);
};

console.log(differenceOfSum([1,2,3,4,10]))