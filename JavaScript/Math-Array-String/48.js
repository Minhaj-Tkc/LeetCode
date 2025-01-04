// 2108. Find First Palindromic String in the Array

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            return word; // Return the first palindromic string
        }
    }
    return ""; // Return an empty string if no palindrome is found
};

// Example usage:
let words1 = ["abc", "car", "ada", "racecar", "cool"];
console.log(firstPalindrome(words1)); // Output: "ada"

let words2 = ["notapalindrome", "racecar"];
console.log(firstPalindrome(words2)); // Output: "racecar"
