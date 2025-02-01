// 2351. First Letter to Appear Twice


/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let seen = new Set();
    
    for (let char of s) {
        if (seen.has(char)) {
            return char;
        }
        seen.add(char);
    }
    
    return ""; // This won't be reached as per problem constraints
};

// Example usage:
console.log(repeatedCharacter("abccbaacz")); // Output: "c"
console.log(repeatedCharacter("abcdd"));    // Output: "d"
