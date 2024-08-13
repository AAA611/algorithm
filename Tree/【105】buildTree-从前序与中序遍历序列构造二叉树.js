/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null

  const headVal = preorder[0]
  const index = inorder.indexOf(headVal)
  const head = new TreeNode(headVal)
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1)
  const leftPreorder = preorder.slice(1, leftInorder.length + 1)
  const rightpreOrder = preorder.slice(1 + leftInorder.length)

  head.left = buildTree(leftPreorder, leftInorder)
  head.right = buildTree(rightpreOrder, rightInorder)

  return head
};