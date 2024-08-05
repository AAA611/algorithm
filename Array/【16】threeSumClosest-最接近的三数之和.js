/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let p = Infinity
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        return sum
      } else if (sum < target) {
        const k = Math.abs(target - sum)
        if (k < p) {
          p = k
          res = sum
        }
        l++
      } else {
        const k = Math.abs(sum - target)
        if (k < p) {
          p = k
          res = sum
        }
        r--
      }
    }
  }
  return res
};

// 📘思路：排序+双指针