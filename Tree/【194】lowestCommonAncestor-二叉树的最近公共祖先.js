/**
 * 方法一
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 */
function lowestCommonAncestor1(root, p, q) {
  let ans

  // dfs 方法的作用是判断以 root 为根节点的子树是否包含 p 或者 q 节点 
  const dfs = (root, p, q) => {
    if (root === null) return false
    const lson = dfs(root.left, p, q)
    const rson = dfs(root.right, p, q)

    if ((lson && rson) || ((lson || rson) && (root.val === p.val || root.val === q.val))) {
      ant = root
    }

    return lson || rson || (root.val === p.val || root.val === q.val)
  }

  dfs(root, p, q)

  return ans
}

/**
 * 方法二
 * @param {*} root 
 * @param {*} p 
 * @param {*} q 
 */
function lowestCommonAncestor2(root, p, q) {
  if (!root) return null

  // nodeToParentMap 用于记录 节点 => 父节点 的映射关系
  const nodeToParentMap = new Map()
  const dfs = (node, parent = null) => {
    if (!node) return
    nodeToParentMap.set(node, parent)
    dfs(node.left, node)
    dfs(node.right, node)
  }

  dfs(root)

  const set = new Set()
  
  // 以 p 为起点，向上遍历，记录包括 p 在内的及其所有的祖先节点
  let parent = p
  while (parent) {
    set.add(parent)
    parent = nodeToParentMap.get(parent)
  }

  // 以 q 为起点，向上遍历，如果 set 中有此节点，那么这个节点便是 p、q 的最近公共祖先，直接返回即可
  parent = q
  while (parent) {
    if (set.has(parent)) {
      return parent
    }
    parent = nodeToParentMap.get(parent)
  }
}