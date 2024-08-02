/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim()
  let res = ''
  for (const c of s) {
    if (res) {
      if (isNumChar(c)) {
        res += c
      } else {
        break
      }
    } else {
      if (c === '-' || c === '+' || isNumChar(c)) {
        res += c
      } else {
        break
      }
    }
  }

  if (res) {
    const p = parseInt(res)
    if (p < Math.pow(-2, 31)) {
      return Math.pow(-2, 31)
    } else if (p > Math.pow(2, 31) - 1) {
      return Math.pow(2, 31) - 1
    } else {
      return p ? p : 0
    }
  }
  return 0
};