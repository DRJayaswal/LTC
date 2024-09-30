const reverse = (s) => {
    let x = ""
    for (let i = s.length - 1; i >= 0; i--) {
        x += s[i];
    }
    return x;
}
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    else if (x < 10){
        return true
    }
    const xS = String(x)
    let firstHalf = ""
    let secondHalf = ""
    for (let i = 0; i < xS.length; i++) {
        if (i < Math.floor(xS.length / 2)) {
            firstHalf += xS[i];
        } else if (i > Math.floor((xS.length - 1) / 2)) {
            secondHalf += xS[i];
        }
    }
    return firstHalf == reverse(secondHalf);
};
console.log(isPalindrome(129821));