class MinHeap {
  #heap
  constructor() {
    this.#heap = []
  }

  #swap(i, j) {
    const temp = this.#heap[i]
    this.#heap[i] = this.#heap[j]
    this.#heap[j] = temp
  }

  #left(i) {
    return 2 * i + 1
  }

  #right(i) {
    return 2 * i + 2
  }

  #parent(i) {
    return Math.floor((i - 1) / 2)
  }

  get size() {
    return this.#heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  #siftUp(i) {
    while (true) {
      const p = this.#parent(i)
      if (p < 0 || this.#heap[i] > this.#heap[p]) break
      this.#swap(i, p)
      i = p
    }
  }

  #siftDown(i) {
    while (true) {
      const l = this.#left(i)
      const r = this.#right(i)

      let ma = i
      if (l > 0 && this.#heap[l] < this.#heap[ma]) ma = l
      if (r > 0 && this.#heap[r] < this.#heap[ma]) ma = r

      if (ma === i) break

      this.#swap(ma, i)

      i = ma
    }
  }

  push(val) {
    this.#heap.push(val)
    this.#siftUp(this.size - 1)
  }

  pop() {
    const val = this.#heap[0]
    this.#swap(0, this.size - 1)
    this.#heap.pop()
    this.#siftDown(0)
    return val
  }

  peek() {
    return this.#heap[0]
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // return nums.sort((a, b) => b - a)[k - 1]

  const minHeap = new MinHeap()
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i])
  }
  for (let i = k; i < nums.length; i++) {
    if (minHeap.peek() < nums[i]) {
      minHeap.pop()
      minHeap.push(nums[i])
    }
  }

  return minHeap.peek()
};

// 方法一：排序
// 方法二：最小堆