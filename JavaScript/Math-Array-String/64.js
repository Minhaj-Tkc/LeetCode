// 2965. Find Missing and Repeated Values

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length; // Grid size (n x n)
    const totalNumbers = n * n;
    
    // Flatten the 2D grid into a 1D array
    const flatArray = grid.flat();
    
    // Create an array to count occurrences of each number
    const count = Array(totalNumbers + 1).fill(0);
    for (const num of flatArray) {
        count[num]++;
    }
    
    let repeated = -1, missing = -1;
    // Check for repeated and missing numbers
    for (let i = 1; i <= totalNumbers; i++) {
        if (count[i] === 2) {
            repeated = i;
        } else if (count[i] === 0) {
            missing = i;
        }
    }
    
    return [repeated, missing];
};

// Example Usage:
const grid1 = [[1, 3], [2, 2]];
console.log(findMissingAndRepeatedValues(grid1)); // Output: [2, 4]

const grid2 = [[9, 1, 7], [8, 9, 2], [3, 4, 6]];
console.log(findMissingAndRepeatedValues(grid2)); // Output: [9, 5]
