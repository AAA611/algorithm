/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  const res = []
  for (let i = 0; i < n - 3; i++) {
    // if (nums[0] > 0 && nums[0] > target) break
    // if (nums[nums.length - 1] < 0 && nums[nums.length - 1] < target) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      const t = target - nums[i] - nums[j]
      let l = j + 1
      let r = n - 1
      while (l < r) {
        const sum = nums[l] + nums[r]
        if (sum === t) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] === nums[l + 1]) l++
          while (l < r && nums[r] === nums[r - 1]) r--
          l++
          r--
        } else if (sum < t) {
          l++
        } else {
          r--
        }
      }
    }
  }
  return res
};

// 📘：思路大致与 【15】三数之和差不多，区别是多了一层循环。⭐ 但注意每层循环都要去重