var canConstruct = function(ransomNote, magazine) {
  if(ransomNote.length > magazine.length)
    return false;
  var rA = ransomNote.split("");
  var mA = magazine.split("");
  for (let i = 0; i < ransomNote.length; i++) {
    for (let j = 0; j < magazine.length; j++) {

      if(rA[i] == mA[j]){
        rA[i] = null;
        mA[j] = null;
      }
    }
  }
  return rA[rA.length - 1] == null;
};

console.log(canConstruct("fihjjjjei","hjibagacbhadfaefdjaeaebgi"));