// 1385. Find the Distance Value Between Two Arrays


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;

    // Iterate through each element in arr1
    for (let num1 of arr1) {
        let isValid = true;

        // Check against each element in arr2
        for (let num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                isValid = false;
                break; // No need to check further if condition fails
            }
        }

        // Increment count if the current element in arr1 is valid
        if (isValid) {
            count++;
        }
    }

    return count;
};

// Example usage:
let arr1 = [4, 5, 8];
let arr2 = [10, 9, 1, 8];
let d = 2;
console.log(findTheDistanceValue(arr1, arr2, d)); // Output: 2

