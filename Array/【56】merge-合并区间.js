/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const res = []
  for (let i = 0; i < intervals.length; i++) {
    let j = i + 1
    let end = intervals[i][1]
    while (j < intervals.length && end >= intervals[j][0]) {
      if (intervals[j][1] > end) {
        end = intervals[j][1]
      }
      j++
    }

    res.push([intervals[i][0], end])

    i = j - 1
  }

  return res
};