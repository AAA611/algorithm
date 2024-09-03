/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function (answerKey, k) {
  const len = answerKey.length
  let left = 0
  let right = 0
  let tCount = 0
  let res = 0
  while (right < len) {
    if (answerKey[right] === 'T') {
      tCount++
    }
    right++
    while (tCount > k) {
      if (answerKey[left] === 'T') {
        tCount--
      }
      left++
    }
    res = Math.max(res, right - left)
  }

  left = 0
  right = 0
  let fCount = 0
  while (right < len) {
    if (answerKey[right] === 'F') {
      fCount++
    }
    right++
    while (fCount > k) {
      if (answerKey[left] === 'F') {
        fCount--
      }
      left++
    }
    res = Math.max(res, right - left)
  }

  return res
};