// 2114. Maximum Number of Words Found in Sentences


/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    // Use map to count words in each sentence, then find the maximum
    return Math.max(...sentences.map(sentence => sentence.split(' ').length));
};

// Example usage:
const sentences = [
    "alice and bob love leetcode", 
    "i think so too", 
    "this is great thanks very much"
];
console.log(mostWordsFound(sentences)); // Output: 6
