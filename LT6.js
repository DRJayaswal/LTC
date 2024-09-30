function last(stack) {
    return stack[stack.length - 1];
}

var isValid = function (s) {
    if (s.length % 2 != 0) {
        return false;
    }
    let stack = [];
    for (const c of s) {
        switch (c) {
            case "(":
                stack.push(1);
                break;
            case ")":
                if (last(stack) == 1) {
                    stack.pop(1);
                } else {
                    return false;
                }
                break;
            case "{":
                stack.push(2);
                break;
            case "}":
                if (last(stack) == 2) {
                    stack.pop(2);
                } else {
                    return false;
                }
                break;
            case "[":
                stack.push(3);
                break;
            case "]":
                if (last(stack) == 3) {
                    stack.pop(3);
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return stack.length===0;
};

console.log(isValid("(("));