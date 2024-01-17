// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Input: s = "textbook"
// Output: false


const s ="textbook";

var halvesAreAlike = function(s) {
    const halfLen = s.length/2
    let i=0;
    let count=0
    let count2=0
    while(i<s.length){
        if(s[i]==='a' || s[i]==='e'|| s[i]==='i'|| s[i]==='o'||s[i]==='u' ||s[i]==='A' || s[i]==='E'|| s[i]==='I'|| s[i]==='O'||s[i]==='U'){
            if(i<halfLen){
               count++
            }else {
               count2++
            }
        }
        i++
    }
    if(count !== count2) return false
   return true
};

console.log(halvesAreAlike(s))



















// var halvesAreAlike = function(s) {
//     const halfLen = s.length/2
//     let i=0;
//     let obj={}
//     let obj2={}
//     while(i<s.length){
//         let element = s[i]
//         if(s[i]==='a' || s[i]==='e'|| s[i]==='i'|| s[i]==='o'||s[i]==='u' ||s[i]==='A' || s[i]==='E'|| s[i]==='I'|| s[i]==='O'||s[i]==='U'){
//             if(i<halfLen){
//                 if(!obj[element]){
//                 obj[element] = 1
//                 }else{
//                 obj[element] = obj[element]+1
//                 }
//             }else {
//                 if(!obj2[element]){
//                     obj2[element] = 1
//                     }else{
//                     obj2[element] = obj2[element]+1
//                 }
//             }
//         }
//         i++
//     }
//     let objLen = Object.values(obj).length 
//     let obj2Len = Object.values(obj2).length
//     if(objLen !== obj2Len) return false

//     let j=0;
//     while(j<objLen){
//         let value = Object.values(obj)[j]
//         let k=0;
//         while(k<obj2Len){
//             let value2 = Object.values(obj2)[k]
//                 console.log(value,value2)
//                 if(value !== value2){
//                      return false
//                 }
//             k++
//         }
//         j++
//     }
//    return true
// };