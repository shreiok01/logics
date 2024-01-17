// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const head = [1,1,2]
var deleteDuplicates = function(head) {
    let newArr=[]
let i=0;
while(i<head.length){
    if(head[i]!==head[i+1]){
        newArr.push(head[i])
    }
    i++
}
console.log(newArr)
return newArr
};
console.log(deleteDuplicates(head))