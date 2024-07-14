class Pair {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
}

class HashMapChaining {
  #size // 键值对数量
  #capacity // 容量
  #loadThres // 触发扩容的负载因子阈值
  #buckets // 存储数据的桶
  #extendRatio // 扩容倍数
  constructor() {
    this.#size = 0
    this.#capacity = 3
    this.#extendRatio = 2
    this.#loadThres = 2 / 3 // 当负载因子达到 2/3 时进行扩容
    this.#buckets = Array(this.#capacity).fill().map(() => []) // 📣:注意这里是一个二维数组，因为为了解决 hash 冲突问题，不同的 key 通过哈希函数计算的桶索引可能是相同的，所以通过数组来保存。
  }

  #hashFunc(key) {
    return key % this.#capacity
  }

  /**
   * 负载因子：当前键值对数量 / 总容量，是一个衡量 HashMap 是否快要满的状态的数值
   * @returns 
   */
  #loadFactor() {
    return this.#size / this.#capacity
  }

  /**
   * 扩容
   */
  #extend() {
    // 暂存原哈希表
    const bucketsTmp = this.#buckets;
    // 初始化扩容后的新哈希表
    this.#capacity *= this.#extendRatio;
    this.#buckets = new Array(this.#capacity).fill(null).map((x) => []);
    this.#size = 0;
    // 将键值对从原哈希表搬运至新哈希表
    for (const bucket of bucketsTmp) {
      for (const pair of bucket) {
        this.put(pair.key, pair.val);
      }
    }
  }

  get(key) {
    const index = this.#hashFunc(key)
    const bucket = this.#buckets[index]
    for (const pair of bucket) {
      if (pair.key === key) {
        return pair.val
      }
    }
    return null
  }

  set(key, val) {
    if (this.#loadFactor >= this.#loadThres) {
      this.#extend() // 扩容
    }

    const index = this.#hashFunc(key)
    const bucket = this.#buckets[index]
    if (bucket) {
      for (const pair of bucket) {
        if (pair.key === key) {
          pair.val = val
          return
        }
      }
      bucket.push(new Pair(key, val))
    } else {
      this.#buckets[index] = [new Pair(key, val)]
    }
    this.#size++
  }

  remove(key) {
    const index = this.#hashFunc(key)
    const bucket = this.#buckets[index]
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const pair = bucket[i]
        if (pair.key === key) {
          bucket.splice(i, 1)
          this.#size--
          return
        }
      }
    }
  }
}

// 本篇主要实现了基于二维数组（也可以是数组中存链表）的 HashMap，主要是为了解决 Hash 冲突的问题，冲突的 key 会被存放在 #buckets 中相同索引的列表（链表）中。