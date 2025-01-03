// 1317. Convert Integer to the Sum of Two No-Zero Integers


/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    // Helper function to check if a number is a No-Zero integer
    const isNoZero = (num) => {
        return !num.toString().includes('0');
    };

    // Find two No-Zero integers that sum to n
    for (let a = 1; a < n; a++) {
        let b = n - a;
        if (isNoZero(a) && isNoZero(b)) {
            return [a, b];
        }
    }
};

console.log(getNoZeroIntegers(2));
console.log(getNoZeroIntegers(11));

