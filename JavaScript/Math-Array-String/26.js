// 557. Reverse Words in a String III


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ")
            .map(word => word.split("").reverse().join(""))
            .join(" ");
};

// Example usage:
console.log(reverseWords("hello world")); // Output: "olleh dlrow"
