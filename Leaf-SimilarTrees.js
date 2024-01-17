// Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
// Output: true

const root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
var leafSimilar = function(root1, root2) {
    const dfs = (root) => {
        if (root === null) {
            return [];
        }
        const leaves = dfs(root.left).concat(dfs(root.right));

        return leaves.length > 0 ? leaves : [root.val];
        
    }
    return JSON.stringify(dfs(root1)) === JSON.stringify(dfs(root2));
};
console.log(leafSimilar(root1, root2))