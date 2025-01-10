// 1688. Count of Matches in Tournament


/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let totalMatches = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            totalMatches += n / 2;
            n = n / 2;
        } else {
            totalMatches += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        }
    }
    return totalMatches;
};

console.log(numberOfMatches(7));  // Output: 6
console.log(numberOfMatches(14)); // Output: 13
