//6. Write a JavaScript program to calculate the factorial of a given number. 

const num = 121;
const checkPrime=(num)=>{
      if(num%2===0){
        return "Not Prime"
      }
      return 'Prime'
}

console.log(checkPrime(num))