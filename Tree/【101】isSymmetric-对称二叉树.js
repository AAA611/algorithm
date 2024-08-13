/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true

  const helper = (left, right) => {
    if (!left && !right) return true
    if (!left || !right) return false
    return left.val === right.val && helper(left.left, right.right) && helper(left.right, right.left)
  }

  return helper(root.left, root.right)
};