const maxArea = function(height) {
    var water_amount = 0
    var i = 0;
    var j = height.length-1
    while (i<j) {
        var left = height[i]
        var right = height[j]
        const distance = j - i
        var small = left < right ? left : right
        if(water_amount < distance * small){
            water_amount = distance * small
        }
        if (left < right) {
            i++;
        } else {
            j--;
        }
    }
    return water_amount
};

console.log(maxArea(height = [1,8,6,2,5,4,8,3,7]))