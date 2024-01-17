// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]

var insert = function(intervals, newInterval) {
    let arr =[]
    let i=0;
    while(i<intervals.length){
        let element = intervals[i]
        for(let i=0;i<element.length;i++){
         for(let j=0;j< newInterval.length;j++){
             if(newInterval[i]>element[j]){

             }else{
                 arr.push([])
             }
        }
    }
    }

};

console.log(insert(intervals, newInterval))