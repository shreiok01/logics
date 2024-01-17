//Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

//Input: num1 = "123", num2 = "456"
//Output: "56088"

var multiply = function(num1, num2) {
    let n1 = num1 , n2 = num2
    console.log(n1,n2)
    let res = '' 
    res = n1 *  n2 
    console.log(res)
    return res
 };

console.log(multiply())