// 2974. Minimum Number Game


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const arr = []
    var nums = nums.sort((a,b)=>b-a)
    while (nums.length){
        let alice =nums.pop()
        let bob = nums.pop()
        arr.push(bob)
        arr.push(alice)
    }
    return arr
};

console.log(numberGame([ 50, 9, 3, 88]))


