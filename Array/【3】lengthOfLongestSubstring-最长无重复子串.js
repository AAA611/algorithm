var lengthOfLongestSubstring = function (s) {
  if (!s) return 0
  const dp = Array(s.length).fill().map((_, i) => s[i])

  for (let i = 1; i < s.length; i++) {
    const index = dp[i - 1].indexOf(s[i])
    if (index !== -1) {
      dp[i] = dp[i - 1].substring(index + 1) + s[i]
    } else {
      dp[i] = dp[i - 1] + s[i]
    }
  }

  return Math.max(...dp.map(i => i.length))
};

var lengthOfLongestSubstring2 = function (s) {
  if (!s) return 0
  const dp = Array(s.length).fill().map((_, i) => s[i])

  for (let i = 1; i < s.length; i++) {
    const index = dp[i - 1].indexOf(s[i])
    if (index !== -1) {
      dp[i] = dp[i - 1].substring(index + 1) + s[i]
    } else {
      dp[i] = dp[i - 1] + s[i]
    }
  }

  return Math.max(...dp.map(i => i.length))
};