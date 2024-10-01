const array_to_sum = (array) => {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}
var minSubArrayLen = (target,array) => {
    const answer = []
    for (let i = array.length - 1 ; i >= 0 ; i--) {
        if(array[i] == target){
            return 1
        }
        answer.push(array[i])
        if(array_to_sum(answer) >= target){
            return answer.length
        }
    }
    return array_to_sum(answer) >= target ? answer.length : 0
}

const testCases = [
    { target: 10, array: [1, 2, 3, 4, 5] },
    { target: 0, array: [0, 0, 0] },
    { target: 15, array: [10, 1, 2, 5] },
    { target: 20, array: [5, 10, 15] },
    { target: 7, array: [2, 3, 1, 5] },
    { target: 30, array: [10, 20, 5] },
    { target: 8, array: [8, 8, 8] },
    { target: 100, array: [10, 20, 30, 40, 50] },
    { target: 50, array: [25, 25] },
    { target: 17, array: [2, 4, 6, 7, 1] },
    { target: 9, array: [1, 1, 8, 2, 3] },
    { target: 5, array: [5, 5, 5] },
    { target: 35, array: [10, 25] },
    { target: 45, array: [15, 10, 20] },
    { target: 55, array: [10, 10, 35] },
    { target: 18, array: [5, 13, 5] },
    { target: 11, array: [1, 2, 3, 5] },
    { target: 1000, array: [1, 1000] },
    { target: 12, array: [1, 2, 5, 4] },
    { target: 0, array: [1, 2, 3, 4, 5] },
    { target: 22, array: [1, 21, 1, 1] },
    { target: 30, array: [10, 10, 10] },
    { target: 60, array: [20, 20, 20] },
    { target: 3, array: [1, 1, 1] },
    { target: 33, array: [11, 11, 11] },
    { target: 21, array: [7, 7, 7] },
    { target: 50, array: [50] },
    { target: 13, array: [1, 12] },
    { target: 40, array: [5, 15, 10, 10] },
    { target: 7, array: [4, 3] },
    { target: 19, array: [9, 10] },
    { target: 24, array: [10, 7, 5, 2] },
    { target: 25, array: [15, 10] },
    { target: 47, array: [17, 30] },
    { target: 71, array: [1, 70] },
    { target: 26, array: [2, 24] },
    { target: 64, array: [64] },
    { target: 42, array: [6, 36] },
    { target: 38, array: [38] },
    { target: 41, array: [41] },
    { target: 2, array: [1, 1] },
    { target: 90, array: [50, 40] },
    { target: 10, array: [10] },
    { target: 99, array: [33, 33, 33] },
    { target: 19, array: [8, 11] },
    { target: 56, array: [28, 28] },
    { target: 62, array: [31, 31] },
    { target: 4, array: [2, 2] },
    { target: 3, array: [1, 1, 1] },
    { target: 89, array: [29, 30, 30] },
    { target: 28, array: [14, 14] },
    { target: 9, array: [1, 2, 6] },
    { target: 77, array: [40, 37] },
    { target: 19, array: [9, 10] },
    { target: 5, array: [3, 2] },
    { target: 11, array: [6, 5] },
    { target: 25, array: [20, 5] },
    { target: 18, array: [12, 6] },
    { target: 33, array: [11, 11, 11] },
    { target: 9, array: [3, 3, 3] },
    { target: 6, array: [4, 2] },
    { target: 8, array: [5, 3] },
    { target: 14, array: [7, 7] },
    { target: 23, array: [8, 7, 5, 3] },
    { target: 10, array: [2, 8] },
    { target: 27, array: [17, 10] },
    { target: 99, array: [33, 33, 33] },
    { target: 7, array: [3, 4] },
    { target: 39, array: [13, 13, 13] },
    { target: 32, array: [16, 16] },
    { target: 12, array: [6, 6] },
    { target: 5, array: [2, 3] },
    { target: 26, array: [14, 12] },
    { target: 50, array: [50] },
    { target: 19, array: [9, 10] },
    { target: 15, array: [5, 5, 5] },
    { target: 22, array: [22] },
    { target: 13, array: [7, 6] },
    { target: 31, array: [16, 15] },
    { target: 44, array: [22, 22] },
    { target: 9, array: [2, 7] },
    { target: 18, array: [12, 6] },
    { target: 60, array: [30, 30] },
    { target: 11, array: [5, 6] },
    { target: 43, array: [22, 21] },
    { target: 9, array: [9] },
    { target: 100, array: [25, 25, 50] },
    { target: 90, array: [30, 30, 30] },
    { target: 10, array: [10] },
    { target: 45, array: [15, 15, 15] },
    { target: 29, array: [10, 10, 9] },
    { target: 65, array: [20, 20, 25] },
    { target: 78, array: [39, 39] }
];
const testResults = [
    3, 0, 2, 2, 2, 2, 1, 0, 2, 3,
    2, 1, 2, 2, 2, 2, 2, 1, 2, 0,
    2, 2, 3, 3, 3, 1, 1, 2, 2, 2,
    2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
    2, 1, 1, 3, 2, 2, 2, 3, 2, 1,
    2, 2, 2, 1, 2, 1, 2, 2, 2, 2,
    1, 2, 1, 3, 2, 2, 3, 3, 2, 2,
    2, 1, 3, 2, 1, 2, 3, 1, 2, 3,
    2, 2, 1, 2, 1, 1, 1, 2, 2, 3,
    2, 1, 2, 1, 2, 2, 1, 1, 2, 2,
    2, 2, 1, 3, 2, 3
];
var res = 0;
for (let i = 0; i < testCases.length; i++) {
    console.log(`Answer: ${testResults[i]}, Sum: ${minSubArrayLen(testCases[i].target,testCases[i].array)}`);
    if(testResults[i] === minSubArrayLen(testCases[i].target,testCases[i].array))
        res++;
}
console.log(`Total Passed: ${(res/testCases.length)*100}`);