// 1281. Subtract the Product and Sum of Digits of an Integer


/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1;
    let sum_of_digits = 0;
    while (n > 0) {
        let digit = n % 10
        product *= digit
        sum_of_digits += digit
        n = Math.floor(n / 10)
    }
    return product - sum_of_digits;
};

console.log(subtractProductAndSum(234));
