// 1662. Check If Two String Arrays are Equivalent

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // Concatenate the strings in each array using join
    const str1 = word1.join('');
    const str2 = word2.join('');
    
    // Compare the concatenated strings
    return str1 === str2;
};
