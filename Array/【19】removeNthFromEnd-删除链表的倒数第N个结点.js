/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let p1 = head
  let p2 = head
  let i = 1
  while (i < n) {
    p2 = p2.next
    if (!p2) return null
    i++
  }

  if (!p2?.next) {
    return p1.next
  }

  let prev = null
  while (p1) {
    prev = p1
    p1 = p1.next
    p2 = p2.next

    if (!p2?.next) {
      prev.next = p1.next
      return head
    }
  }
};

// 📘思路：利用双指针，p1 是常规遍历指针，p2 在 p1 遍历之前先往后面移动 n 步，等 p2 移动到结尾时，⭐p1 到达的就是将被删除的节点