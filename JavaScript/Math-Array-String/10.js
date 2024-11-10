// 2427. Number of Common Factors

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {

    let mi = Math.min(a,b);
    let count = 0
    for (let i = 1; i <= mi; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count;
    
};

console.log(commonFactors(25, 30));