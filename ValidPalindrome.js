// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const  s ="1a2"

var isPalindrome = function(s) {
    let newStr = ""
    let regex = /^[a-zA-Z0-9]+$/; 
    for(let i=0;i<s.length;i++){
        if(regex.test(s[i])){
            newStr += s[i]
        }
    }
    let reversedStr =""
    let i=newStr.length-1;
    while(i>=0){
        reversedStr += newStr[i]
        i--
    }
    console.log(newStr,reversedStr)
    if(newStr.toLowerCase()===reversedStr.toLowerCase()){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome(s))
