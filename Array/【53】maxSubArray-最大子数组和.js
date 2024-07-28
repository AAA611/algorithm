var maxSubArray = function (nums) {
  const n = nums.length
  const dp = Array(n).fill(-Infinity)
  dp[0] = nums[0]
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }
  return Math.max(...dp)
};

// 📘思路：动态规划