// 2129. Capitalize the Title


/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // Split the title into words
    let words = title.split(" ");
    
    // Process each word based on its length
    let capitalizedWords = words.map(word => {
        if (word.length <= 2) {
            // If the word length is 1 or 2, convert it to lowercase
            return word.toLowerCase();
        } else {
            // If the word length is greater than 2, capitalize the first letter and lowercase the rest
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
    });
    
    // Join the processed words back into a single string
    return capitalizedWords.join(" ");
};

// Example usage
console.log(capitalizeTitle("capiTalIze tHe titLe")); // Output: "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word")); // Output: "First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode")); // Output: "i Love Leetcode"
