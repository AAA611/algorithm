/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const val = this.cache.get(key)
  if (this.cache.has(key)) {
    this.cache.delete(key)
    this.cache.set(key, val)
    return val
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key)
    this.cache.set(key, value)
  } else {
    if (this.cache.size < this.capacity) {
      this.cache.set(key, value)
    } else {
      const keyWillDelete = this.cache.keys().next().value
      this.cache.delete(keyWillDelete)
      this.cache.set(key, value)
    }
  }
};