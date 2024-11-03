// 2469. Convert the Temperature


/**
 * @param {number} celsius
 * @return {number[]}
 */

// var convertTemperature = function(celsius) {
//     Kelvin = celsius + 273.15
//     Fahrenheit = celsius * 1.80 + 32.00 
//     return [Kelvin, Fahrenheit]
// };

var convertTemperature = function(celsius) {
    return [celsius + 273.15 , celsius * 1.80 + 32.00]
};


console.log(convertTemperature(36.50)); // Output: [309.65, 97.7]