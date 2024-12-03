// 1816. Truncate Sentence

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // Split the sentence into words
    const words = s.split(" ");
    // Select the first k words and join them with spaces
    return words.slice(0, k).join(" ");
};

// Example usage:
const s = "Hello how are you Contestant";
const k = 4;
console.log(truncateSentence(s, k)); // Output: "Hello how are you"
