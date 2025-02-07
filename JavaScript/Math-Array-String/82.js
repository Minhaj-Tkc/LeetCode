// 3005. Count Elements With Maximum Frequency


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    // Step 1: Count the frequency of each element
    let freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Find the maximum frequency
    let maxFreq = Math.max(...freqMap.values());

    // Step 3: Sum the frequencies of elements with the maximum frequency
    let total = 0;
    for (let freq of freqMap.values()) {
        if (freq === maxFreq) {
            total += freq;
        }
    }

    return total;
};

// Test Cases
console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // Output: 4
console.log(maxFrequencyElements([1, 2, 3, 4, 5]));    // Output: 5
