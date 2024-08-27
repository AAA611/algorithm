/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]

  const arr = []
  for (const [n, x] of map) {
    while (num >= n) {
      arr.push(x)
      num -= n
    }
    if (num === 0) {
      break
    }
  }

  return arr.join('')
};

// 📘思路：先根据规则把数字对应的罗马字符写到 Hash 表里