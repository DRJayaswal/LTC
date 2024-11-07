var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;
  var rA = ransomNote.split("");
  var mA = magazine.split("");
  const uC = [];
  const rC = {};
  const mC = {};
  for (var i = 0; i < rA.length; i++){
    if(!uC.includes(rA[i])){
      uC.push(rA[i]);
    }
  }
  for (let i = 0; i < rA.length; i++) {
      if (rC[rA[i]] != undefined) {
        rC[rA[i]]++;
      } else {
        rC[rA[i]] = 1;
      }
  }
  for (let i = 0; i < mA.length; i++) {
      if (mC[mA[i]] != undefined) {
        mC[mA[i]]++;
      } else {
        mC[mA[i]] = 1;
      }
  }
    for (let i = 0; i < uC.length; i++){
      if(rC[uC[i]] <= mC[uC[i]]) {
        continue
      }else{
        return false;
      }
    }
    return true;
};

console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
