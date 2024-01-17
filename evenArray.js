// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arr = [202,4,202,33,5,34,200,53,32,52,30]

// const evenArray=(arr)=>{
//     const evenArray = []
//    for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]%2===0){
//         evenArray.push(arr[i])
//     } 
//    }
//    return evenArray
// }

// const evenArray=(arr)=>{
//     const evenArray = []
//     let i=0
//     while(i<=arr.length-1){
//     if(arr[i]%2===0){
//         evenArray.push(arr[i])
//     } 
//    i++
//    }
//    return evenArray
// }

// const evenArray=(arr)=>{
//     const evenArray = []
//     let i=0
//    do{
//     if(arr[i]%2===0){
//         evenArray.push(arr[i])
//     } 
//     i++
//    } while(i<=arr.length-1)
//    return evenArray
// }

// const evenArray=(arr)=>{
//         const evenArray = []
//         arr.foreach((elm)=>{
//         if(elm%2===0){
//             evenArray.push(elm)
//         } 
//         })
//        return evenArray
//     }
console.log(evenArray(arr))