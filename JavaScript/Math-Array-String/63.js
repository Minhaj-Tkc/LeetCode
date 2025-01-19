// 389. Find the Difference

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let result = 0;

    // XOR all characters in both s and t
    for (let char of s + t) {
        result ^= char.charCodeAt(0); // Get the ASCII value of the character and XOR it
    }

    return String.fromCharCode(result); // Convert the resulting ASCII value back to a character
};

// Examples
console.log(findTheDifference("abcd", "abcde")); // Output: "e"
console.log(findTheDifference("", "y"));         // Output: "y"

