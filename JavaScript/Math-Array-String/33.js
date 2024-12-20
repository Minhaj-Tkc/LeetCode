// 1351. Count Negative Numbers in a Sorted Matrix

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;

    for (let row of grid) {
        // Use binary search to find the first negative number in the row
        let left = 0, right = row.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (row[mid] < 0) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        // All elements from `left` to the end of the row are negative
        count += row.length - left;
    }

    return count;
};

// Example usage:
const grid1 = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]];
const grid2 = [[3, 2], [1, 0]];

console.log(countNegatives(grid1)); // Output: 8
console.log(countNegatives(grid2)); // Output: 0
