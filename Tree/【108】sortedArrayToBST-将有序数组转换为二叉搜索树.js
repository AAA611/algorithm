/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (nodeValues) => {
    if (!nodeValues.length) return null
    const mid = Math.floor(nodeValues.length / 2)
    const head = new TreeNode(nodeValues[mid])
    head.left = buildTree(nodeValues.slice(0, mid))
    head.right = buildTree(nodeValues.slice(mid + 1))

    return head
  }

  return buildTree(nums)
};