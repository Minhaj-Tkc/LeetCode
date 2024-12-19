// 2154. Keep Multiplying Found Values by Two

/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    // Convert nums to a Set for faster lookup
    let numsSet = new Set(nums);

    // Keep checking and multiplying original as long as it's found in numsSet
    while (numsSet.has(original)) {
        original *= 2;
    }

    return original;
};


console.log(findFinalValue([5,3,6,1,12], 3));
