// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".

const s="mgntdygtxrvxjnwksqhxuxtrv"

var maxLengthBetweenEqualCharacters = function(s) {
    let i=0;
    let count =0;
    while(i<s.length){
        let element = s[i]
              let j=i+1;
              while(j<s.length){
                if(element===s[j]){
                   return count;
                }else{
                    count++
                }
                j++
              }
              count=0;
          i++
    }
    return -1
};

console.log(maxLengthBetweenEqualCharacters(s))