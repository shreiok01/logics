// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".

const s =  "()(())"
var longestValidParentheses = function(s) {
    let    arr = [-1] , count =0
    for(let i=0;i<s.length;i++){
      if(s[i]==='(' ) {
        arr.push(i)
      } else if(arr.length === 1) {
        arr[0] = i
      } else{
        arr.pop() 
        count =  Math.max(count, i - arr[arr.length-1])
      }
    }
    return count
};

// var longestValidParentheses = function(S) {
//     let stack = [-1], ans = 0
//     for (let i = 0; i < S.length; i++)
//         if (S[i] === '(') stack.push(i)
//         else if (stack.length === 1) stack[0] = i
//         else stack.pop(), ans = Math.max(ans, i - stack[stack.length-1])
//     return ans
// };

console.log(longestValidParentheses(s))