// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

const  nums = [-1,2,1,-4],target = 1

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }

    }
    return closestSum;
};
console.log(threeSumClosest(nums,target))