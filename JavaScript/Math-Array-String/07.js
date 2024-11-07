// 2455. Average Value of Even Numbers That Are Divisible by Three

/**
 * @param {number[]} nums
 * @return {number}
 */

var averageValue = function(nums) {
    let sum = 0, count = 0;
    for (let num of nums) { 
        if (num % 2 === 0 && num % 3 === 0) {
            sum += num;
            count++;
        }
    }
    return count === 0 ? 0 : Math.floor(sum / count);
};


console.log(averageValue([1,3,6,10,12,15]));
