/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[nums.length - 1] < 0) break
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    const target = 0 - nums[i]
    let l = i + 1;
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[l] + nums[r]
      if (sum === target) {
        res.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] === nums[l + 1]) l++ // ⭐ 这里要注意需要去重，而且去重的逻辑需要写在 l++;r--;的前面
        while (l < r && nums[r] === nums[r - 1]) r--
        l++
        r--
      } else if (sum < target) {
        l++
      } else {
        r--
      }
    }
  }

  return res
};