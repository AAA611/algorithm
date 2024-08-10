/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0

  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      res = Math.max(res, prices[i] - min)
    }
  }

  return res
};

// 📘思路：
// 先定义一个最小值 min 为 prices[0]
// 从 1 开始遍历数组，遇到更小的，更新 min
// 遇到更大的计算 res=Math.max(res,prices[i]-min)
// 遍历完成后即可求出最终结果