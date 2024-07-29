/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  const res = []
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    if (left < right && top < bottom) { // ⭐ 注意这里的语句，判断只有一行或者一列，这是为了避免重复遍历
      for (let i = right - 1; i > left; i--) {
        res.push(matrix[bottom][i])
      }
      for (let i = bottom; i > top; i--) {
        res.push(matrix[i][left])
      }
    }

    left++
    right--
    top++
    bottom--
  }

  return res
};