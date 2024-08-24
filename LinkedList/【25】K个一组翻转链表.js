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