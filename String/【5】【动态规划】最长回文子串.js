// 解法一：中心扩展法
// 📘思路:以 s[i] 为中心的回文串长度,找到最长的那个
// ⭐注意要处理连续的重复字符情况
const longestPalindrome1 = (s) => {
  if (s.length === 1) return s
  let maxStr = ''
  for (let i = 0; i < s.length; i++) {
    let l = r = i
    while (s[r] === s[r + 1]) {
      r++
    }
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--
      r++
    }
    if (r - l - 1 > maxStr.length) {
      maxStr = s.substring(l + 1, r)
    }
  }
  return maxStr
}

// 解法二：动态规划
// 📘思路：定义二位dp数组
// dp[i][j]表示以 i 开头、j 结尾的字串是否是回文子串，如果 dp[i+1][j-1] 是回文子串，那么 dp[i][j] 也是回文串。
// 每找到一个回文子串都与结果 res 相比较,如果长度比 res 长,则更新 res
const longestPalindrome2 = (s) => {
  let res = ''
  const n = s.length
  const dp = Array(n).fill().map(() => Array(n).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }

  return res
}

