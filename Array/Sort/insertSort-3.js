// 插入排序的思想是：将当前遍历到的元素插入到前面已经排序的序列中


/**
 * @param {number[]} nums 
 */
function insertSort(nums) {
  const len = nums.length
  for (let i = 1; i < len; i++) {
    const val = nums[i]
    let j = i - 1
    while (j >= 0 && nums[j] > val) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = val
  }

  return nums
}

const nums = [1, 4, 12, 1]
console.log(insertSort(nums));
