// O(n^2)
var isSubsequenceN2 = function(s, t) {
    let count = 0
    for(const i in t){
        for(const j in s){
            if(count === s.length) return count === s.length
            if(t[i]===s[j]){
                count++
            }
        }
    }
    return count === s.length
};
// O(n)
var isSubsequenceN = function(testString , string) {
    let stringI = 0
    let testStringI = 0
    while(stringI < string.length && testStringI < testString.length){
        if(testString[testStringI] === string[stringI]){
            testStringI++
        }
        stringI++
    }
    return testStringI === testString.length
};
console.log(isSubsequenceN("ace","akhcje"))