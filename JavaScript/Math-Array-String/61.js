// 2011. Final Value of Variable After Performing Operations


/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0; // Initialize X to 0
    for (let operation of operations) {
        if (operation === "++X" || operation === "X++") {
            X += 1;
        } else if (operation === "--X" || operation === "X--") {
            X -= 1;
        }
    }
    return X; // Return the final value of X
};


let operations = ["--X", "X++", "X++"];
console.log(finalValueAfterOperations(operations)); // Output: 1
