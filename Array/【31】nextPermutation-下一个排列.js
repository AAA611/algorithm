/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {

      // ===== 找出可以交换的最小元素的下标 index
      let j = i + 1
      let min = nums[i]
      let index = i
      while (j < nums.length) {
        if (nums[j] > nums[i - 1] && nums[j] < min) {
          index = j
        }
        j++
      }

      // ===========

      // 交换
      swap(nums, index, i - 1)
      
      // 交换后，对交换元素后面进行升序排序
      for (let m = i; m < nums.length - 1; m++) {
        for (let n = m + 1; n < nums.length; n++) {
          if (nums[m] > nums[n]) {
            swap(nums, m, n)
          }
        }
      }
      return nums
    }
  }

  return nums.reverse()
};

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}