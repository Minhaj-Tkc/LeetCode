// 2833. Furthest Point From Origin

/**
 * @param {string} moves
 * @return {number}
 */
// var furthestDistanceFromOrigin = function(moves) {
//     let L = moves.split("L").length - 1;
//     let R = moves.split("R").length - 1;
//     let _ = moves.split("_").length - 1;
//     console.log(_, L, R);
    
    
    // if( L < R){
    //     return R + _ - L;
    // }else{
    //     return L + _ - R;
    // }
// };

var furthestDistanceFromOrigin = function(moves) {
    let L = 0, R = 0, _ = 0;

    for (let char of moves) {
        if (char === 'L') L++;
        else if (char === 'R') R++;
        else if (char === '_') _++;
    }

    if( L < R){
        return R + _ - L;
    }else{
        return L + _ - R;
    }
};


console.log(furthestDistanceFromOrigin("_RR__LL_"));