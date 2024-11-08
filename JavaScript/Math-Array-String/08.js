// 1614. Maximum Nesting Depth of the Parentheses


/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    let maxDepth = 0;
    let currentDepth = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            currentDepth++;
            maxDepth = Math.max(maxDepth, currentDepth);
        } else if (s[i] === ')') {
            currentDepth--;
        }
    }
    
    return maxDepth;

};


console.log(maxDepth("()(())((()()))"));
