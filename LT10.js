var myPow = function (x, n) {
    if (n < 0) return 1 / myPow(x, -n);
    if (n === 0) return 1;
    if (n === 1) return x;

    let halfPow = myPow(x, Math.floor(n / 2));
    return (n % 2 === 0) ? halfPow * halfPow : x * halfPow * halfPow;
};

console.log(myPow(34.00515, -3));