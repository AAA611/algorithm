/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return []
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  const res = []

  const fn = (cur, i) => {
    if (cur.length === digits.length) {
      res.push(cur)
      return
    }
    for (let c of map[digits[i]]) {
      fn(cur + c, i + 1)
    }
  }

  fn('', 0)

  return res
};

// 📘思路：递归+回溯