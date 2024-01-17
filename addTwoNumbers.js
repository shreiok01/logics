// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const l1 = [2,4,3], l2 = [5,6,4] 

var addTwoNumbers = function(l1, l2) {
    let n1 ="" , n2 =""
    let i=l1.length-1
    while(i>=0){
        n1 += l1[i]
        i--
    }
    let j=l2.length-1
    while(j>=0){
        n2 += l2[j]
        j--
    }
    const sum = parseInt(n1) + parseInt(n2)
    let newSum = sum.toString().split('')
  
    let newArr =[]
    let k=newSum.length-1;
    while(k>=0){
        newArr.push(newSum[k])
        k--
    }
    return newArr
};
console.log(addTwoNumbers(l1,l2))