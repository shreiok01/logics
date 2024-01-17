// nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

let  nums = [0,1,2,2,3,0,4,2], val = 2

var removeElement = function(nums, val) {
    let newNums = nums.filter((e)=>e!==val)
    const newNumsLength = newNums.length
    let j=0;
    while(j<nums.length-newNumsLength){
        newNums.push("-")
        j++
    }
    return newNums;
};
console.log(removeElement(nums, val))