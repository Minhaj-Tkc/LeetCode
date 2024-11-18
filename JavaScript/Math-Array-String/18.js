// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0) return false; 

    let str = x.toString(); // Convert number to string
    let reversedStr = str.split('').reverse().join(''); // Reverse the string
    return str === reversedStr;

};

console.log(isPalindrome(121));