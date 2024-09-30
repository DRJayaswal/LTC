/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
var strStr = function (large, small) {
    if(small.length>large.length) return -1;
    if(small.length===0) return 0;
    let counter=-1
    for (let i = 0; i < large.length; i++) {
        if (large[i] == small[0]){
            counter=i
            let z = i
            for(let j=0;j<small.length;j++){
                if(large[z]!==small[j]){
                    counter=-1
                    break;
                }
                z++
            }
            if(counter!=-1) return counter
        }
    }
    return counter
};

// More Optimized

// var strStr = function (large, small) {
//     if (small.length > large.length) return -1;
//     if (small.length === 0) return 0;
//     for (let i = 0; i <= large.length - small.length; i++) {
//         let match = true;
//         for (let j = 0; j < small.length; j++) {
//             if (large[i + j] !== small[j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) return i;
//     }
//     return -1;
// };


console.log(strStr("sadbutnosad", "sad"))