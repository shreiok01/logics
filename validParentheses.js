
//Input: s = "()[]{}"
//Output: true

let  s ="()"

const isValid=()=>{
  const stack = [];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  for(let i=0;i<s.length;i++){
    let value = s[i]
    if(bracketPairs[value]){
      stack.push(value)
    }else{
      if(stack.length ===0 || bracketPairs[stack.pop()] !== value){
        return false
      }
    }
  }
  return stack.length ===0;
}
console.log(isValid(s))