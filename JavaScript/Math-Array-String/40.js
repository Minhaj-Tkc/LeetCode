// 1678. Goal Parser Interpretation


/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // Replace "()" with "o"
    command = command.replace(/\(\)/g, "o");
    // Replace "(al)" with "al"
    command = command.replace(/\(al\)/g, "al");
    return command;
};

// Examples
console.log(interpret("G()(al)")); // Output: "Goal"
console.log(interpret("G()()()()(al)")); // Output: "Gooooal"
