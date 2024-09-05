/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const numRe = /[0-9]/
  const fn = (s) => {
    if (!s) return s
    let res = ''
    for (let i = 0; i < s.length; i++) {
      if (numRe.test(s[i]) && !numRe.test(res[res.length - 1])) {
        res = res.substring(0, res.length - 1)
      } else {
        res += s[i]
      }
    }
    if (res !== s) {
      return fn(res)
    }

    return res
  }

  return fn(s)
};

// 📘思路：递归

// 其他思路：先把字符串 s 转成数组然后再操作