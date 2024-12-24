// 70. Climbing Stairs


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n; // Base cases for n = 1 and n = 2
    let first = 1, second = 2; // Initialize the first two steps
    for (let i = 3; i <= n; i++) {
        let third = first + second; // Current step is the sum of the previous two
        first = second; // Move first pointer to the next step
        second = third; // Move second pointer to the next step
    }
    return second; // Return the total ways to reach step `n`
};

// Example usage
console.log(climbStairs(3)); // Output: 2
console.log(climbStairs(4)); // Output: 3
console.log(climbStairs(5)); // Output: 8
