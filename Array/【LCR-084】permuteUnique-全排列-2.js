var permuteUnique = function (nums) {
  const n = nums.length
  const res = []
  const fn = (cur, selected) => {
    if (cur.length === n) {
      res.push(cur)
    } else {
      const map = {}
      for (let i = 0; i < n; i++) {
        if (!map[nums[i]] && !selected[i]) {
          fn([...cur, nums[i]], { ...selected, [i]: true })
          map[nums[i]] = true
        }
      }
    }
  }

  fn([], {})

  return res
};