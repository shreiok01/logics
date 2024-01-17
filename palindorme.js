//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

const num = 121;

// const palindrome=(num)=>{
//     let reverseNum = 0
//     let  tempOriginal = num

//     while(tempOriginal > 0){
//         lastDigit = tempOriginal % 10
//         reverseNum = reverseNum * 10 + lastDigit
//         tempOriginal = tempOriginal / 10
//     }
//     if (num == reverseNum){
//         return 1
//     }else{
//         return 0
//     }
// }

// const palindrome=(num)=>{
//    let i=num.length-1;
//    let temp=""
//    while(i>=0){
//     temp += num[i]
//     i--
//    }
//    if(temp===num){
//     return true
//    }else{
//     return false
//    }
// }




console.log(palindrome(num))