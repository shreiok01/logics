//You are given the heads of two sorted linked lists list1 and list2.

//Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

//Return the head of the merged linked list.
(list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1,1,2,3,4,4]

function mergeTwoLists(list1, list2) {
  if (!list2 || list2.length === 0) {
    return list1; // If list2 is null or empty, return list1
  } else if (!list1 || list1.length === 0) {
    return list2;
  }
  for (let i = 0; i < list2.length; i++) {
    list1.push(list2[i]);
  } 
  let i = 0;
  while (i < list1.length) {
    let j = 1;
    while (j < i) {
      if (list1[i] < list1[j]) {
        [list1[i], list1[j]] = [list1[j], list1[i]];
        j++;
      }
      i++;
    }
  }
  return list1;
}

// var mergeTwoLists = function(list1, list2) {
//    console.lo
//      const lengthOfArray = list2.length
//      for(let i=0; i<lengthOfArray;i++){
//         list1.push(list2[i])
//      }
//      let i=0;
//      while(i<list1.length){
//          let j=1;
//          while(j<i){
//             if(list1[i]<list1[j]){
//                [ list1[i],list1[j]] =   [ list1[j],list1[i]]
//             }
//             j++
//          }
//         i++
//      }
//     return list1
// };

console.log(mergeTwoLists(list1, list2));
