/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  const res = []
  const row = mat.length
  const col = mat[0].length
  let i = 0
  let j = 0
  let d = 0
  let f
  while (i < row || j < col) {
    if (j >= col) {
      j--
      i++
    }
    if (i >= row) {
      i--
      j++
    }
    while (mat[i]?.[j] !== undefined) {
      res.push(mat[i][j])
      if (d) {
        i++
        j--
        f = 0
      } else {
        i--
        j++
        f = 1
      }
    }
    if (f == 0) {
      i--
      j++
    } else if (f == 1) {
      i++
      j--
    }
    f = undefined
    if (d) {
      i++
      d = 0
    } else {
      j++
      d = 1
    }
  }
  return res
};