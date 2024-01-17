// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Input: n = 16
// Output: true
// Explanation: 24 = 16

const n=16

var isPowerOfTwo = function(n) {
    if(n<=0) return false
    const countNum =(num)=>{
         let count =0;
         while(num>0){
            count += num & 1;
            num >>= 1; 
         }
         return count
    }
    return countNum(n) ===1 ;
};
console.log(isPowerOfTwo(n))