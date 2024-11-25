// 367. Valid Perfect Square

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 0) {
        return false; // Negative numbers are not perfect squares
    }
    
    let x = num; // Initial guess for the square root

    // Iterative Refinement (Newton's Method)
    while (x * x > num) {
        x = Math.floor((x + Math.floor(num / x)) / 2); 
    }
    
    return x * x === num; // Check if the square of the final x equals num

};

console.log(isPerfectSquare(25));