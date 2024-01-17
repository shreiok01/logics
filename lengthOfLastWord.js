// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

const s="moon"

var lengthOfLastWord = function (s) {
    if(s.length===1) return 1
    let len = 0;
    for (let i = s.length-1; i >= 0; i--) {
      if(len===0 &&  s[i]===" ") i--;
      if(s[i]===" " && len!==0){
          break;
      }else if(s[i]!==" " && s[i]!==undefined){
          len += 1
      }
    }
    return len
  };
console.log(lengthOfLastWord(s));
