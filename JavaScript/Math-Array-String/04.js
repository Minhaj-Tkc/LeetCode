// 2413. Smallest Even Multiple

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    
    return n % 2 == 0 ? n : n << 1

};

// var smallestEvenMultiple = function(n) {
    
//     if ( n % 2 != 0 ){
//         return n << 1
//     }else{
//         return n
//     }
// };

console.log(smallestEvenMultiple(5));
