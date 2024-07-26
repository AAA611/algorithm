var getIntersectionNode = function (headA, headB) {
  const map = new Map()
  let cur = headA
  while (cur) {
    map.set(cur, true)
    cur = cur.next
  }
  cur = headB
  while (cur) {
    if (map.has(cur)) {
      return cur
    }
    cur = cur.next
  }
  return null
};

// 思路：先遍历 headA 使用 map 结构保存遍历过的节点，再遍历 headB，如果节点能在 map 中找到，则说明此节点是两个链表的相交节点，直接返回此节点即可。否则就在全部遍历完成之后返回 null。