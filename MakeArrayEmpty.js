// Input: nums = [2,3,3,2,2,4,2,3,4]
// Output: 4

// Input: nums = [2,1,2,2,3,3]
// Output: -1

const nums = [2,3,3,2,2,4,2,3,4]
var minOperations = function(nums) {
      // let count = 0;

    // for (let i = 0; i < nums.length; i++) {
    //     let j = i + 1;
    //     console.log("nums.length",nums[i] , nums[j])
    //     while (j < nums.length && nums[i] === nums[j]) {

    //         j++;
    //     }

    //     if (j - i >= 2) {
    //       // console.log("i, j - i",nums[i], nums[j - i])
    //         nums.splice(i, j - i);
    //         count += j - i;
    //         i--; // Adjust i to recheck the element after removal
    //     }
    // }
    // console.log("count",nums)
    // return nums.length === 0 ? count : -1;

    let obj ={}
    for(let i=0;i<nums.length;i++){
        let element = nums[i]
          if(!obj[element]) {
            obj[element] = 1
          }else {
            obj[element] = obj[element] + 1  
          }
    }
    const keys = Object.keys(obj)
    const values =  Object.values(obj) 
    let arr = []
    for(let i=0;i<nums.length;i++){
      for(let j=0;j<keys.length;j++){
        if(nums[i] === keys[i]){
          if( values[i]== 2  || values[i]== 3){
            arr = nums.filter((e)=>console.log("e===nums[i]",e===nums[i]))
          }
        }
      }
    }
    console.log("arr",arr)
};
console.log(minOperations(nums))