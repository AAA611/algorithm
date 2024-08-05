/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  const fn = (r, index) => {
    res.push(r)
    for (let i = index; i < nums.length; i++) {
      fn([...r, nums[i]], i + 1)
    }
  }

  fn([], 0)

  return res
};

// 📘思路：回溯