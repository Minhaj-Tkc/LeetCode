// 1832. Check if the Sentence Is Pangram

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26;
};

// Example usage:
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // Output: true
console.log(checkIfPangram("leetcode")); // Output: false

