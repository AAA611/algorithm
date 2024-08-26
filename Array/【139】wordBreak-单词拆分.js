/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const memo = new Map()
  const fn = (cur) => {
    if (memo.has(cur)) return memo.get(cur)
    if (!s.startsWith(cur)) {
      memo.set(cur, false)
      return false
    } else if (s === cur) {
      memo.set(cur, true)
      return true
    } else {
      for (let i = 0; i < wordDict.length; i++) {
        const flag = fn(cur + wordDict[i])
        if (flag) {
          memo.set(cur, true)
          return true
        }
      }
      memo.set(cur, false)
      return false
    }
  }

  return fn('')
};

// 📘思路：回溯 + 记忆化搜索