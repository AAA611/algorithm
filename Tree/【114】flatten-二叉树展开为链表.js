/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return null

  const leftNode = root.left  // 先保存左节点
  const rightNode = root.right //先保存右节点

  root.right = flatten(leftNode) // 右节点改为左节点的递归展开
  root.left = null // 左节点设置为 null

  let cur = root // 以 root 为起始点，向下遍历知道最后一个节点
  while (cur?.right) {
    cur = cur.right
  }
  if (cur) { // 最后一个节点的右节点指向 root.right 的递归展开
    cur.right = flatten(rightNode)
  }

  return root
};