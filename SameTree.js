// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

const p = [1,2,3], q =[1,2,3]

var isSameTree = function(p, q) {
   if(p.length!==q.length) return false
   let count = 0
   for(let i=0;i<p.length;i++){
         let j=0;
         while(j<q.length){
            if(p[i]===q[j]){
                count++
            }
            j++
         }
   }
   return p.length===count 
};

console.log(isSameTree(p,q))
