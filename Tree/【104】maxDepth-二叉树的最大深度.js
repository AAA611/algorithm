/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0

  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
};