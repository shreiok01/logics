// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

const nums =[-1,100,2,100,100,4,100]

// const nums = [-1, 100, 2, 100, 100, 4, 100];

var majorityElement = function (nums) {
    let count = 0;
    let candidate = null;
  
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
  
      count += (num === candidate) ? 1 : -1;
    }
  
    return candidate;
};

// console.log(majorityElement(nums));  // Output: 100


// var majorityElement = function(nums) {
//     if(nums.length===1) return nums[0]
//     let obj={}
//     for(let i=0;i<nums.length;i++){
//         let element = nums[i]
//         if(!obj[element]){
//             obj[element] = 1
//         }else{
//             obj[element] = obj[element] +1
//         }
//     }
//     let count;
//     let i=1;
//     let value;
//     if(Object.keys(obj).length===1) return nums[0]

//     while(i<=Object.keys(obj).length-1){
//         count = Object.keys(obj)[0]
//         value = Object.values(obj)[0]

//         if(value < Object.values(obj)[i]){
//             value = Object.values(obj)[i]
//             count = Object.keys(obj)[i]
//         }
//         i++
//     }
//     return count;
// };


console.log(majorityElement(nums))