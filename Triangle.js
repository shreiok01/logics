// Input: triangle =[[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like

const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]  

var minimumTotal = function (triangle) {
  let i = triangle.length-2;
  while (i >= 0) {
    let element = triangle[i];
      for (let j = 0; j < element.length; j++) {
        element[j] += Math.min(triangle[i+1][j] , triangle[i+1][j+1]);
      }
    i--;
  }
  return triangle[0][0];
};
console.log(minimumTotal(triangle));
