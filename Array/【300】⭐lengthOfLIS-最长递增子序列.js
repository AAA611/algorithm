/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   const n = nums.length
//   const dp = Array(n).fill(1)
//   for (let i = 1; i < n; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   return Math.max(...dp)
// };


/**
 * 进阶版，返回最长序列的值而不只是长度
 * @param {*} arr 
 */
function lengthOfLISPlus(arr) {
  let res = []
  const dp = Array(arr.length).fill().map((_, index) => [arr[index]])
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        if (dp[i].length < dp[j].length + 1) {
          dp[i] = [...dp[j], arr[i]]
        }
      }
    }
    if (dp[i].length > res.length) {
      res = dp[i]
    }
  }
  return res
}

console.log(lengthOfLISPlus([0, 1, 2, 3, 4, 5]));
console.log(lengthOfLISPlus([10, 1, 2, 3, 24, 5]));
console.log(lengthOfLISPlus([10, 1, 20, 30, 40, 5, 600]));
