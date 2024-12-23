// 509. Fibonacci Number


/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0; // Base case: F(0) = 0
    if (n === 1) return 1; // Base case: F(1) = 1
    
    let a = 0, b = 1; // Initialize the first two Fibonacci numbers
    for (let i = 2; i <= n; i++) {
        let temp = a + b; // Calculate the next Fibonacci number
        a = b;            // Shift a to b
        b = temp;         // Shift b to the new Fibonacci number
    }
    return b; // Return the n-th Fibonacci number
};

// Example usage
console.log(fib(2)); // Output: 1
console.log(fib(3)); // Output: 2
console.log(fib(10)); // Output: 55
