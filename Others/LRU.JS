class LRU {
  constructor(capacity) {
    this.capacity = capacity || 5
    this.cache = new Map()
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else {
      if (this.cache.size === this.capacity) {
        this.delete()
      }
    }
    this.cache.set(key, value)
  }

  get(key) {
    if (this.cache.has(key)) {
      const val = this.cache.get(key)
      this.cache.set(key, val)
    }
    return this.cache.get(key)
  }

  delete() {
    const oldestKey = this.cache.keys().next().value
    this.cache.delete(oldestKey)
  }
}

const cache = new LRU()
cache.put(1,1)
cache.put(2,2)
cache.put(3,3)
cache.put(4,4)
cache.put(5,5)
cache.put(1,1)
cache.put(6,6)
console.log(cache);