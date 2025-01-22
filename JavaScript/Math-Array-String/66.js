// 3090. Maximum Length Substring With Two Occurrences


/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let charCount = {};
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        charCount[s[right]] = (charCount[s[right]] || 0) + 1;

        // Shrink the window if any character appears more than twice
        while (Object.values(charCount).some(count => count > 2)) {
            charCount[s[left]] -= 1;
            if (charCount[s[left]] === 0) {
                delete charCount[s[left]];
            }
            left++;
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Test cases
console.log(maximumLengthSubstring("bcbbbcba")); // Output: 4
console.log(maximumLengthSubstring("aaaa"));    // Output: 2
