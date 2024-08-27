/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // return Array.from(s).sort().join('')===Array.from(t).sort().join('') // ⭐方法一：这种方式也可以


  if (s.length !== t.length) return false
  const len = s.length

  const arr1 = Array(26).fill(0) // ⭐储存 26 个小写字母的个数，使用这种方式的前提是字符串中只有小写字母组成
  const arr2 = Array(26).fill(0)

  for (let i = 0; i < len; i++) {
    arr1[s[i].charCodeAt() - 97]++
    arr2[t[i].charCodeAt() - 97]++
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
};