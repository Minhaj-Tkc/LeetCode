// 2706. Buy Two Chocolates

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    // Sort the prices array in ascending order
    prices.sort((a, b) => a - b);
    
    // Initialize variables
    let minSum = Infinity; // To track the minimum sum of valid pairs
    let leftover = money;  // Default leftover if no valid pair exists

    // Iterate over all pairs
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let totalCost = prices[i] + prices[j];
            if (totalCost <= money) {
                if (totalCost < minSum) {
                    minSum = totalCost;
                    leftover = money - totalCost;
                }
            } else {
                break; // Since prices are sorted, no need to check further
            }
        }
    }

    return leftover;
};

// Example usage
console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62)); // Output: 22
console.log(buyChoco([1, 2, 2], 3)); // Output: 0
console.log(buyChoco([3, 2, 3], 3)); // Output: 3
