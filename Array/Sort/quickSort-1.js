
/**
 * 快速排序：选择一个节点，小于这个节点的值放到 left 数组，大于这个节点的值放到 right 数组，然后递归再对 left、right 进行上述操作，直到子数组的长度小于等于 1
 * @param {number[]} nums 
 */
function quickSort(nums) {
  const len = nums.length
  if (len <= 1) return nums
  const mid = Math.floor(len / 2)
  const left = []
  const right = []
  const mids = []
  for (let i = 0; i < len; i++) {
    if (nums[i] < nums[mid]) {
      left.push(nums[i])
    } else if (nums[i] > nums[mid]) {
      right.push(nums[i])
    } else if (i !== mid) {
      mids.push(nums[i])
    }
  }

  return [...quickSort(left), nums[mid], ...mids, ...quickSort(right)]
}

// test case
const nums = [5, 678, 43, 23, 23]
console.log(quickSort(nums));
