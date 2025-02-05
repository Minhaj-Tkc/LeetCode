// 1512. Number of Good Pairs


var numIdenticalPairs = function(nums) {
    let countMap = {};  // To store frequency of each number
    let goodPairs = 0;

    for (let num of nums) {
        if (countMap[num]) {
            goodPairs += countMap[num]; // Add existing count to goodPairs
            countMap[num]++; // Increase the count
        } else {
            countMap[num] = 1; // Initialize count
        }
    }

    return goodPairs;
};

// Example test cases
console.log(numIdenticalPairs([1,2,3,1,1,3])); // Output: 4
console.log(numIdenticalPairs([1,1,1,1]));     // Output: 6
console.log(numIdenticalPairs([1,2,3]));       // Output: 0
