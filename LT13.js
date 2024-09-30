/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
const split = (string,bases) => {
    let newString = ""
    for(const c of string){
        if(c === bases){
            continue
        }else{
            newString+=c
        }
    }
    return newString.toLowerCase();
}
const reverse = (string) => {
    let reverseString = ""
    for(let i=string.length-1;i>=0;i--){
        reverseString+=string[i]
    }
    return reverseString;
}
var isPalindrome = function (s) {
    const bases = [
        "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
        "[", "]", "{", "}", "\\", "|", ";", ":", "'", "\"", ",", ".", "<", ">",
        "/", "?", "~", "`", " "
    ];
    let newString = s
    for(const base of bases){
        newString = split(newString,base)
    }
    let firstHalf = ""
    let secondHalf = ""
    for (let i = 0; i < newString.length; i++) {
        if (i < Math.floor(newString.length / 2)) {
            firstHalf += newString[i];
        } else if (i > Math.floor((newString.length - 1) / 2)) {
            secondHalf += newString[i];
        }
    }
    return firstHalf == reverse(secondHalf)
};
console.log(isPalindrome("A man, &a plan, a canal: Panama"))