//Input: nums = [0,0,1,1,1,2,2,3,3,4]
//Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

const nums =  [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates = function(nums) {
    let newArr =[]
    let newArr1 =[]
    let obj = {}
    let value = '_'
    for(let i=0; i < nums.length; i++){
            let element = nums[i] 
            if(!obj[element] ){
                obj[element] = 1
                newArr.push(nums[i])
            }else{
                newArr1.push(value)
            }
    }
    const newArelength = newArr.length
    let i =0;
    while(i<newArr1.length){
        newArr.push(newArr1[i])
        let j=0
        while(j<newArr.length){
            if(newArr[i]<newArr[j]){
                [newArr[i],newArr[j]]=[newArr[j],newArr[i]]
            }
            j++
        }
        i++
    }
    return  {  newArelength,  newArr}
    };

console.log(removeDuplicates(nums))
