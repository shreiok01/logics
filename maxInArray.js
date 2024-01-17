//2. Write a JavaScript program to find the maximum number in an array. 

const arr = [202,4,202,33,5,34,203,53,32,52,30]

// const maxInArray=(arr)=>{
//     let maxValue = arr[0]
//     for(let i=1;i<arr.length;i++){
//           if(arr[i]>maxValue) maxValue = arr[i]
//     }
//     return maxValue
// }


// const maxInArray=(arr)=>{
//     let maxValue = arr[0]
//     let i=1;
//     while(i<=arr.length){
//         if(arr[i]>maxValue) maxValue = arr[i]  
//         i++
//     }
//     return maxValue
// }

// const maxInArray=(arr)=>{
//     let maxValue = arr[0]
//     let i=1;
//     do{
//         if(arr[i]>maxValue) maxValue = arr[i]  
//         i++
//     }while(i<arr.length)
//     return maxValue
// }


console.log(maxInArray(arr))