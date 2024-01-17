// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

const arr =  []

var uniqueOccurrences = function(arr) {
    let i=0;
    let obj={}
    while(i<arr.length){
        let element = arr[i];
        if(!obj[element]){
            obj[element] = 1
        }else{
            obj[element] = obj[element]+1
        }
        i++
    }
    let length =Object.values(obj).length
    for(let i=0;i<length;i++){
        let elm = Object.values(obj)[i]
        for(let j=i+1;j<length;j++){
            let elm2 = Object.values(obj)[j]
            if(elm===elm2){
                            return false
            }
        }
    }

    // let j=0;
    // while(j<length){
    //     let elm = Object.values(obj)[j]
    //     let k=j+1;
    //     while(k<length){
    //         let elm2 = Object.values(obj)[k]
    //         if(elm===elm2){
    //             return false
    //         }else{
    //         k++
    //         }
    //     }
    //     j++
    // }
    return true
}; 

console.log(uniqueOccurrences(arr))