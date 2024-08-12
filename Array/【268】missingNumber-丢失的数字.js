/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const map = {}
  for (const num of nums) {
    map[num] = true
  }

  for (let i = 0; i <= nums.length; i++) {
    if (!map[i]) {
      return i
    }
  }
};

// 📘思路：哈希表加两次遍历