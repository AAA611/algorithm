/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []

  const res = []
  const queue = [root]

  while (queue.length) {
    const len = queue.length
    const curFloor = []
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      curFloor.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(curFloor)
  }

  return res
};

// 📘思路：使用队列，每一层使用 for 循环遍历一次