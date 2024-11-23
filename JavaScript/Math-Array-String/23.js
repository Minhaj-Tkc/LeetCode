// 507. Perfect Number

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;

    let divisorSum = 1; 

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { 
            divisorSum += i;
            if (i !== num / i) { 
                divisorSum += num / i;
            }
        }
    }

    return divisorSum === num;
};


// Example usage
console.log(checkPerfectNumber(28)); // true (Perfect number: 1 + 2 + 4 + 7 + 14 = 28)
console.log(checkPerfectNumber(6));  // true (Perfect number: 1 + 2 + 3 = 6)
console.log(checkPerfectNumber(12)); // false (Sum of divisors: 1 + 2 + 3 + 4 + 6 = 16)