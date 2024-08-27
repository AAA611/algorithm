/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  const arr = Array(numRows).fill().map(() => [])

  let r = 0
  let c = 0
  let direction = 0
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]

    arr[c][r] = cur
    if (c === numRows - 1) {
      r++
      c--
      direction = 1
    } else if (c === 0) {
      c++
      direction = 0
    } else {
      if (direction === 0) {
        c++
      } else {
        r++
        c--
      }
    }

  }

  let res = ''
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j]) {
        res += arr[i][j]
      }
    }
  }

  return res
};