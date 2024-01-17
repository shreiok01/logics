//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.

//Input: nums = [1,3,5,6], target = 5
//Output: 2

let nums = [1,3,5,6,10,4,28,472,48,3,5,2,5], target = 4

nums.push(target);
for (let i = 0; i <= nums.length - 1; i++) {
    for (let j = 0; j <= nums.length - 1; j++) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
}
let i=0;
while(i < nums.length){
    if(nums[i] === target) { 
        console.log(i)
        return
    }
    i++
}

// for (let i = 0; i < nums.length; i++) {
//   if(nums[i] === target) { 
//     console.log(i)
//     return
//   }
// }
console.log(nums)
// if(!isTure){
//     nums.push(target);
//     for (let i = 0; i <= nums.length - 1; i++) {
//         for (let j = 0; j <= nums.length - 1; j++) {
//           if (nums[i] < nums[j]) {
//             [nums[i], nums[j]] = [nums[j], nums[i]];
//           }
//         }
//       }
// }
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         return i
//     }
// }
