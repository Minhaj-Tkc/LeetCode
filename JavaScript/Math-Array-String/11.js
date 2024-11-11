// 1979. Find Greatest Common Divisor of Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let ma = Math.max(...nums)
    let mi = Math.min(...nums)

    let gcd = 1
    for(let i=1; i<=mi; i++) {
        if(ma % i === 0 && mi % i === 0) {
            gcd = i;
        }
    }
    return gcd;
};

console.log(findGCD([3, 3]));
