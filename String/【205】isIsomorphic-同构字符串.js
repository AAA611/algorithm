/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const n = s.length
  let i = 0
  const map1 = Object.create(null)
  const map2 = Object.create(null)
  while (i < n) {
    if (!map1[s[i]]) {
      map1[s[i]] = t[i]
      if (!map2[t[i]]) {
        map2[t[i]] = s[i]
      }
    }
    if (map1[s[i]] != t[i] || map2[t[i]] != s[i]) {
      return false
    }

    i++
  }
  return true
};

// 📘思路：双哈希表映射