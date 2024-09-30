var mySqrt = function (x) {
    let left = 0
    let right = x
    let ans = 0
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(mid*mid>x){
            right = mid-1
        }else if(mid*mid<x){
            ans = mid
            left = mid+1
        }else{
            return mid
        }
    }
    return ans
};

console.log(mySqrt(132421341))