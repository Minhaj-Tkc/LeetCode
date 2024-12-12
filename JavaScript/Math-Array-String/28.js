// 2894. Divisible and Non-divisible Sums Difference

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0; // Sum of numbers not divisible by m
    let num2 = 0; // Sum of numbers divisible by m
    
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            num2 += i;
        } else {
            num1 += i;
        }
    }
    
    return num1 - num2;
};

// Example usage:
let n = 5;
let m = 6;
console.log(differenceOfSums(n, m)); // Output: 15
