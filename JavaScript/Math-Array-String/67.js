// 2273. Find Resultant Array After Removing Anagrams


/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let i = 1; // Start checking from the second word
    while (i < words.length) {
        // Check if words[i] and words[i - 1] are anagrams
        if (words[i].split('').sort().join('') === words[i - 1].split('').sort().join('')) {
            words.splice(i, 1); // Remove the current word
        } else {
            i++; // Move to the next word
        }
    }
    return words;
};

// Example 1
const words1 = ["abba", "baba", "bbaa", "cd", "cd"];
console.log(removeAnagrams(words1)); // Output: ["abba", "cd"]

// Example 2
const words2 = ["a", "b", "c", "d", "e"];
console.log(removeAnagrams(words2)); // Output: ["a", "b", "c", "d", "e"]
