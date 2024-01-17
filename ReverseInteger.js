// Input: x = 123
// Output: 321

const x = -123

var reverse = function(x) {
    let str = x.toString().split('')
    let reversedNum = ""
    let i=str.length-1;
    while(i>=0){
        reversedNum += str[i]
        i--
    }
    console.log(reversedNum)
    return parseInt(reversedNum) 
};

console.log(reverse(x))