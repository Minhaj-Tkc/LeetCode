// 1929. Concatenation of Array



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }
  for (let j = 0; j < nums.length; j++) {
    arr.push(nums[j]);
  }
  return arr;
};
