class Pair {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
}

/**
 * 基于 Array 实现的简单 HashMap
 */
class ArrayHashMap {
  #buckets // 存放键值对的桶
  constructor() {
    this.#buckets = []
  }

  /**
   * HashFunc 哈希函数，作用是得到 key 与 桶索引 index 的映射关系，也是 HashMap 中实现快速查找的核心。
   * @param {*} key 
   * @returns 
   */
  #hashFunc(key) {
    return key % 100
  }

  get(key) {
    const index = this.#hashFunc(key)
    const pair = this.#buckets[index]
    if (pair) {
      return pair.val
    }
    return null
  }

  put(key, val) {
    const index = this.#hashFunc(key)
    const pair = new Pair(key, val)
    this.#buckets[index] = pair
  }

  entires() {
    return [...this.#buckets]
  }

  keys() {
    return this.#buckets.map(pair => pair.key)
  }

  values() {
    return this.#buckets.map(pair => pair.val)
  }
}