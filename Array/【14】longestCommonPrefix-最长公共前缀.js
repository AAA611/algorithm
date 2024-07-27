var longestCommonPrefix = function (strs) {
  let res = ''
  let index = 0
  let len = Math.min(...strs.map(str => str.length))
  while (index < len) {
    let cur = strs[0][index]
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][index] !== cur) {
        return res
      }
    }
    res += cur
    index++
  }
  return res
};