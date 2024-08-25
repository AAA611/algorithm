/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
// ⭐ pathSum 函数的作用：计算以 root 为根节点的和为 targetSum 的数量
var pathSum = function (root, targetSum) {

  if (!root) return 0

  let res = nodeSum(root, targetSum) // 计算以 root 开始，和为 targetSum 的路径数量
  res += pathSum(root.left, targetSum) // 计算以 root.left 为根节点，和为 targetSum 的路径数量
  res += pathSum(root.right, targetSum) // 计算以 root.right 为根节点，和为 targetSum 的路径数量

  return res
};

// 递归函数做了什么：计算以 node 开始，和为 sum 的路径数
// 入参：node 节点，sum
// 返回：路径个数
// 何时跳出：当 node 为 null 时
function nodeSum(node, sum) {
  let res = 0
  if (!node) return res
  if (node.val === sum) {
    res++
  }
  res += nodeSum(node.left, sum - node.val)
  res += nodeSum(node.right, sum - node.val)
  return res
}