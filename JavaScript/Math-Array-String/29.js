// 520. Detect Capital

/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // Check if all letters are uppercase
    if (word === word.toUpperCase()) {
        return true;
    }
    // Check if all letters are lowercase
    if (word === word.toLowerCase()) {
        return true;
    }
    // Check if only the first letter is uppercase
    if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
        return true;
    }
    // If none of the conditions are met
    return false;
};

// Example usage
console.log(detectCapitalUse("USA"));   // Output: true
console.log(detectCapitalUse("FlaG"));  // Output: false
