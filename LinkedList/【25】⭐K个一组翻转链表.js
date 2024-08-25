/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let c = head
  let j = 0
  while (c) {
    c = c.next
    j++
  }

  if (j < k) {
    return head
  }

  let prev = head
  let cur = head.next
  let i = 0
  while (i < (k - 1)) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
    i++
  }

  head.next = reverseKGroup(cur, k)

  return prev
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup1 = function (head, k) {
  // 递归函数干了什么：递归函数主要做从 node 开始的 k 个链表节点的翻转，如果不够 k 个，则直接返回 node，不做翻转操作
  // 递归函数的入参：入参是翻转的开始节点与翻转节点的个数 k
  // 递归函数的返回：返回是翻转后的头节点
  // 何时跳出递归：剩余节点不够 k 个时直接返回 node，不会再进入递归函数了
  const fn = (node, k) => {
    let i = 0;
    let c = node
    while (c) {
      c = c.next
      i++
    }

    if (i < k) {
      return node
    }

    let cur = node
    let prev = null
    for (let i = 0; i < k; i++) {
      const next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }

    node.next = fn(cur, k) // 当前节点的 next 是下一轮翻转的头节点

    return prev
  }

  return fn(head, k)
};