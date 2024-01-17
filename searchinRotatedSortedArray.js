// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

const nums = [1], target = 0

var search = function(nums, target) {
    let isTrue = -1
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            isTrue = i
        }
    }
    return isTrue 
};

console.log(search(nums,target))