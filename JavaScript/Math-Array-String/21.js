// 2180. Count Integers With Even Digit Sum


/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;

    for (let i = 2; i <= num; i++) {
        let temp = i; // Save the original value of i
        let digitSum = 0;

        // Calculate the sum of the digits
        while (temp > 0) {
            digitSum += temp % 10; // Add the last digit
            temp = Math.floor(temp / 10); // Remove the last digit
        }

        // Check if the sum of digits is even
        if (digitSum % 2 === 0) {
            count++;
        }
    }

    return count;
};

console.log(countEven(11));
