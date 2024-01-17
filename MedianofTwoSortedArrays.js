// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const nums1 =[2,2,4,4], nums2 =[2,2,4,4]

var findMedianSortedArrays = function(nums1, nums2) {
    for(let i=0;i<nums2.length;i++){
        nums1.push(nums2[i])
    }
    const n = nums1.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (nums1[j] > nums1[j + 1]) {
            [nums1[j] , nums1[j+1]] =  [nums1[j+1] , nums1[j]]
        }
     }
    }
    console.log(nums1)
    if(nums1.length % 2 ===0){
        const midLength = (nums1.length-1)/2
        for(let i=0;i<nums1.length;i++){
            if(i===parseInt(midLength)){
                return (nums1[i] + nums1[i+1]) / 2
            }
        } 
    }else{
        const midLength = nums1.length/2
        return nums1[parseInt(midLength)]
    }
};

console.log(findMedianSortedArrays(nums1,nums2))