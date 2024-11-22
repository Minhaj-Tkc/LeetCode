//  3099. Harshad Number

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    let num = x;

    while( num > 0 ){
        sum += num % 10
        num = Math.floor( num / 10 );
    }

    if( x % sum == 0){
        return sum
    } else {
        return -1
    }

};

console.log(sumOfTheDigitsOfHarshadNumber(22));
