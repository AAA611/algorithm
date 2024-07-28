var permute = function (nums) {
  const n = nums.length
  const res = []
  const fn = (cur, selected) => {
    if (cur.length === n) {
      res.push(cur)
    } else {
      for (let i = 0; i < n; i++) {
        if (!selected[nums[i]]) {
          fn([...cur, nums[i]], { ...selected, [nums[i]]: true })
        }
      }
    }
  }

  fn([], {})
  return res
};