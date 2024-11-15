// 709. To Lower Case

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let result = "";
    for (const char of s) {
        const asciiIndex = char.charCodeAt(0);

        if (asciiIndex >= 65 && asciiIndex <= 90) {
            result += String.fromCharCode(asciiIndex + 32);
        }
        else {
            result += char;
        }
    }
    return result;
};

// var toLowerCase = function(s) {
//     return s.toLowerCase()
// };

console.log(toLowerCase("Hello World")); // Output: "hello world"