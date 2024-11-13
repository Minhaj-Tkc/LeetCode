// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (newMap.has(complement)) {
      return [newMap.get(complement), i];
    }

    newMap.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 5, 5, 11], 10));

// var twoSum = function(nums, target) {

//     for(let i=0;i<nums.length; i++){
//         for(let j= i+1; j<nums.length;j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j]
//             }
//         }
//     }
//     return []

// };
