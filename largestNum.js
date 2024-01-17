//8. Write a JavaScript program to find the largest element in a nested array. 

const arr = [[22,80,79,58,0,89,67,67],4,202,33,5,34,203,53,32,52,30]

const findLargestElement=(arr)=>{
    const nestedArr = arr[0]
    let largerstNum = nestedArr[0]
    for(let i=0 ; i<nestedArr.length;i++){
     if(largerstNum < nestedArr[i]) largerstNum = nestedArr[i]
    }
    return largerstNum;
}
console.log(findLargestElement(arr))