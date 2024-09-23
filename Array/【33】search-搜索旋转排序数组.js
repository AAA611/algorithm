function search(nums: number[], target: number): number {
  const len = nums.length
  let left = 0
  let right = len - 1
  while (left <= right) {
      const mid = Math.floor((right - left) / 2) + left
      if (nums[mid] === target) return mid
      
      // 通过判断 num[left] 与 nums[mid] 的大小来判断有序区间（ 即 mid 左边有序还是右边有序 ）
      // 因为如果 nums[left]<=nums[mid],说明从 left 到 mid 数组是升序状态，所以 mid 的左边有序，反之则 mid 的右边有序
      if (nums[left] <= nums[mid]) {
          // 左半部分有序

          // 判断 target 的区间位置
          if (nums[left] <= target && target < nums[mid]) {
              right = mid - 1
          } else {
              left = mid + 1
          }
      } else {
          // 右半部分有序

          // 判断 target 的区间位置
          if (nums[mid] < target && target <= nums[right]) {
              left = mid + 1
          } else {
              right = mid - 1
          }
      }
  }

  return -1
};