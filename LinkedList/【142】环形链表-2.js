// 1、链表节点标记法

const detectCycle1 = (head) => {
  let cur = head
  while (cur) {
    if (cur.has) {
      return cur
    }
    cur.has = true
    cur = cur.next
  }
  return null
}

// 2、哈希表

const detectCycle2 = (head) => {
  let cur = head
  const map = new Map()
  while (cur) {
    if (map.has(cur)) {
      return cur
    }
    map.set(cur, true)
    cur = cur.next
  }
  return null
}

// 3、快慢指针
// 📘思路：当 slow 与 fast 相遇时，另取一个指针指向 head，即为 cur。cur 与 slow 同时走，cur 与 slow 的相遇点即为环的入口点。
const detectCycle3 = (head) => {
  let slow = fast = head
  while (fast) {
    slow = slow.next
    if (fast.next) {
      fast = fast.next.next
    } else {
      return null
    }

    if (slow === fast) {
      let cur = head
      while (cur !== slow) {
        slow = slow.next
        cur = cur.next
      }
      return cur
    }
  }
  return null
}