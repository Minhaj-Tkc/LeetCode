// 2769. Find the Maximum Achievable Number


/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    return num + 2 * t;
};

// Examples
console.log(theMaximumAchievableX(4, 1)); // Output: 6
console.log(theMaximumAchievableX(3, 2)); // Output: 7
