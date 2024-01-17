//4. Write a JavaScript program to reverse a given string. 

const str = "Hello, How are you?"

// const reverseString=(str)=>{
//     let newStr =""
//      for (let i=str.length-1;i>=0;i--){
//         newStr += str[i]
//      }
//      return newStr
// }

// const reverseString=(str)=>{
//     let newStr =""
//     let i=str.length-1
//      while (i>=0){
//         newStr += str[i]
//         i--
//      }
//      return newStr
// }


const reverseString=(str)=>{
    let newStr =""
    let i=str.length-1
     do{
        newStr += str[i]
        i--
     }while (i>=0);
     return newStr
}
console.log(reverseString(str))