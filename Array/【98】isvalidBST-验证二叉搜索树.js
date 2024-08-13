/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (root, lower, upper) => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
  }

  return helper(root, -Infinity, Infinity);
};