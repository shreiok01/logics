// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.

const nums  =  [1,2,0];

var firstMissingPositive = function (nums) {
    let i=0;

    while(i<nums.length){
        if(nums[i]>0 && nums[i] < nums.length && nums[nums[i]-1] !== nums[i]){
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }else{
            i++
        }
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== i+1) return i+1
    }

    return i+1
}


console.log(firstMissingPositive(nums));
