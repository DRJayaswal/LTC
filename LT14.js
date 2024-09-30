/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const reverse = (array) => {
    let newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}
var hIndex = function (citations) {
    citations.sort((a, b) => b - a); // Sort citations in descending order
    let h = 0;

    // Traverse the sorted citations
    for (let i = 0; i < citations.length; i++) {
        if(citations[i]>=i+1){
            h = i + 1; // Update h to be the current index + 1
        }else{
            break; // No need to check further if the condition fails
        }
    }

    return h;
};

// console.log(hIndex([1, 3, 1]))
console.log(hIndex([3,0,1,6,5]))