var longestSubStringLength = (string) => {
    var current_sub_string = ""
    var previous_sub_string = ""
    for (var i = 0; i < string.length; i++) {
        if(current_sub_string === ""){
            current_sub_string += string[i]
        }
        if(current_sub_string.includes(string[i]) && previous_sub_string.length <= current_sub_string.length){
            previous_sub_string = current_sub_string
            current_sub_string = ""
            current_sub_string += string[i]
        }else{
            current_sub_string += string[i]
        }
    }
    return previous_sub_string
}

console.log(longestSubStringLength("abcc"))