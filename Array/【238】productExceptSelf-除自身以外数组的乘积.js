/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const answer = Array(nums.length).fill(0)
  const zeroIndexList = []
  let p = 1
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num !== 0) {
      p *= num
    } else {
      zeroIndexList.push(i)
    }
  }
  if (zeroIndexList.length > 1) {
    return answer
  }
  for (let i = 0; i < nums.length; i++) {
    if (!zeroIndexList.length) {
      answer[i] = p / nums[i]
    }else{
      if (zeroIndexList[0] === i) {
        answer[i] = p
      }
    }
  }
  return answer
};

// 注意要考虑数组中元素为 0 的情况