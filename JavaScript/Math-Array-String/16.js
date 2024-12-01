// 657. Robot Return to Origin

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let x = 0; 
    let y = 0;

    for(let i of moves){  

        if(i === "U"){
            x += 1;
        } else if(i === "D"){
            x -= 1;
        } else if(i === "L"){
            y += 1;
        } else if(i === "R"){
            y -= 1;
        }

    }

    console.log(x, y);
    
    return x === 0 && y === 0;
    
};

console.log(judgeCircle("UD"));

