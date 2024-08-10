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
// 维护一个最小的绝对值，每此求和之后计算一个于target的绝对值跟这个最小绝对值比较，如果比最小绝对值小，更新结果 res 与最小绝对值
// 这样全部遍历完成后可以得到最接近的和