/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0
  let min = prices[0]

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else {
      res += prices[i] - min
      min = prices[i]
    }
  }
  return res
};

// 思路：贪心算法
// 维护一个最小值 min ,最开始为 prices[i]
// 遍历数组
// 如果遇到更小的,更新 min
// 如果遇到比 min 大的 prices[i],则卖掉股票赚取利润 prices[i] - min,重新设置 min 为 prices[i]
// 遍历完成后可以获得最大利润值