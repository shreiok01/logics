// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

const nums = [2,0,1]

var sortColors = function(nums) {
    let i=0;
    while(i<nums.length){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]>nums[j]){
                [nums[i],nums[j]]=[nums[j],nums[i]]
            }
        }
        i++
    }
    return nums
};

console.log(sortColors(nums))