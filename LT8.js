const array_number = (digitArray) =>{
    let numberString = ""
    for(const digit of digitArray){
        numberString += String(digit)
    }
    return BigInt(numberString);
}
const number_array = (number) => {
    let digitArray = []
    while(number>0n){
        digitArray.push(Number(number % 10n))
        number=number/10n
    }
    return digitArray;
}
const reverse = (array) => {
    let newArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}
var plusOne = function (digits) {
    return reverse(number_array(array_number(digits)+1n));
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))