// 1528. Shuffle String

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    // Create an array to hold the shuffled characters
    let shuffled = new Array(s.length);
    
    // Place each character at the correct index
    for (let i = 0; i < s.length; i++) {
        shuffled[indices[i]] = s[i];
    }
    
    // Join the array into a single string and return it
    return shuffled.join('');
};

// Example usage
let s = "codeleet";
let indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(restoreString(s, indices)); // Output: "leetcode"
