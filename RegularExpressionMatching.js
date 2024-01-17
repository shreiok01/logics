// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".


// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".

const  s = "ab", p = ".*"

var isMatch = function(s, p) {
    if(s.length !== p.length) return false

    let i=0;
    while(i<s.length){
        let j=0;
        while(j<p.length){
            if(s[i]!==p[j] || p[j] !=='.' || p[j] !=='*') {
                return false
            }
            j++
        }
    i++
    }
    return true
};

console.log(isMatch(s,p))