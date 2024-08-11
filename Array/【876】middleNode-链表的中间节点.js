/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slow = fast = head

  while (fast?.next) { // ⭐这里也要注意 fast 为 null 的情况
    slow = slow.next
    fast = fast.next.next
  }

  return slow
};