// 3000. Maximum Area of Longest Diagonal Rectangle

/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;

    for (let [length, width] of dimensions) {
        let diagonal = Math.sqrt(length ** 2 + width ** 2);
        let area = length * width;

        if (diagonal > maxDiagonal || (diagonal === maxDiagonal && area > maxArea)) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
    }

    return maxArea;
};

// Example usage:
let dimensions = [[9, 3], [8, 6]];
console.log(areaOfMaxDiagonal(dimensions)); // Output: 48
