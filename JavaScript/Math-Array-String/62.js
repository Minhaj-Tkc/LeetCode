// 2828. Check if a String Is an Acronym of Words


/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    // Generate the acronym by concatenating the first character of each word in the `words` array
    const acronym = words.map(word => word[0]).join('');
    // Check if the generated acronym matches the string `s`
    return acronym === s;
};

// Example usage
console.log(isAcronym(["alice", "bob", "charlie"], "abc")); // Output: true
console.log(isAcronym(["an", "apple"], "a"));              // Output: false
