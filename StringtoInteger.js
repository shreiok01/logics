// Input: s = "4193 with words"
// Output: 4193

const s = "   -42"

var myAtoi = function(s) {
    let res =""
    let count =0
    for(let i=0;i<s.length;i++){
        if(s[i]=== '0' || s[i]=== '1' || s[i]=== '2' || s[i]=== '3' || s[i]=== '4' || s[i]=== '5' || s[i]=== '6' || s[i]=== '7' || s[i]=== '8' || s[i]=== '9' || s[i]==="-"){
            res += s[i]
        }else if(s[i] == ' ' && count!==0){
            return count===0 ? res : 0;
        }else{
            count++
        }
    }
    return  count===0 ? res : 0;
};
console.log(myAtoi(s))