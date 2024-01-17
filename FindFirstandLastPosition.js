// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

const nums =[3,3,3], target = 3

var searchRange = function(nums, target) {
    if(nums.length===1 && nums[0]===target) return[0,0] 
    let newArr = []
    let i=0;
    while(i<nums.length){
        if(nums[i]===target){
            newArr.push(i)
        }
        i++
    }
    if(newArr.length===0){ 
        newArr.push(-1,-1)
    }else if(newArr.length===1){
        newArr.push(newArr[0])
        return newArr
    }else if(newArr.length > 2){
        let arr = []
        arr.push(newArr[0],newArr[newArr.length-1])
        return arr
    };
    return newArr
};

console.log(searchRange(nums,target))