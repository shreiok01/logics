// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

const  nums = [1,2,3]

var subsets = function(nums) {
    const subSets = [[]]
    let i=0;
    while(i<nums.length){
        let element = nums[i]
        let length = subSets.length;
          let j=0;
          while(j<length){
               let subArr = subSets[j].slice(0)
               subArr.push(element)
               subSets.push(subArr)
            j++
          }
        i++
    }
    return subSets
};

console.log(subsets(nums))