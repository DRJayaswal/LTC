/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
s = "PAYPALISHIRING"
numRows = 3

var convert = function (s, n) {
    let r = 1
    let rs = ""
    for (let index = 0; index < s.length; index++) {
        if(index===s.length%r){
            rs += ((n-1)*2)
        }
    }
};

