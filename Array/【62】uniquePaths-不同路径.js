/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = Array(m).fill().map(() => Array(n).fill(1))

  let res = 1
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      if (dp[i][j] > res) {
        res = dp[i][j]
      }
    }
  }

  return res
};

// 📘思路：动态规划