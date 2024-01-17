// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
const lists = []
var mergeKLists = function(lists) {
    const newArr=[]
    for(let i=0;i<lists.length;i++){
        const k = lists[i]
        for(let j=0;j<k.length;j++){
            newArr.push(k[j])
        }
    }
    for(let i=0;i<newArr.length;i++){
        for(let j=i+1;j<newArr.length;j++){
            if(newArr[i]>newArr[j]){
               [ newArr[i],newArr[j] ] =  [ newArr[j],newArr[i] ]
            }
        }
    }
    return newArr
};
console.log(mergeKLists(lists))