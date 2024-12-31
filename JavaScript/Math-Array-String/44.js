// 1773. Count Items Matching a Rule


/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    // Map ruleKey to its respective index in the items array
    const keyIndexMap = { "type": 0, "color": 1, "name": 2 };
    const ruleIndex = keyIndexMap[ruleKey];
    
    // Count the number of matches
    let matchCount = 0;
    for (const item of items) {
        if (item[ruleIndex] === ruleValue) {
            matchCount++;
        }
    }
    
    return matchCount;
};

// Example usage:
const items1 = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]];
const ruleKey1 = "color";
const ruleValue1 = "silver";
console.log(countMatches(items1, ruleKey1, ruleValue1)); // Output: 1

const items2 = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]];
const ruleKey2 = "type";
const ruleValue2 = "phone";
console.log(countMatches(items2, ruleKey2, ruleValue2)); // Output: 2
