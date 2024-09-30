/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
var trailingZeroes = function (n) {
    let counter = 0
    while(n>=5){
        n=Math.floor(n/5)
        counter+=n
    }
    return counter
};

console.log(trailingZeroes(100))