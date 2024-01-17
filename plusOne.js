// Input: digits = [1,2,3]
// Output: [1,2,4]

const digits =[1,2,3,20,10]

var plusOne = function(digits) {
   let newDigit = ""
   let newArr = ""
   for(let i=0; i<digits.length;i++){
      newDigit += digits[i]
   }
   let value = BigInt(newDigit,10)
   newArr = value + 1n  
   const splitedArr = newArr.toString().split('')
   return splitedArr
};
console.log(plusOne(digits))