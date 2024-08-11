/**
 * 方法一：先合并后排序
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};


/**
 * 方法二：双指针
 * @param {*} nums1 
 * @param {*} m 
 * @param {*} nums2 
 * @param {*} n 
 */
var merge = function (nums1, m, nums2, n) {
  let p1 = 0
  let p2 = 0

  while (p1 < m + n && p2 < n) {
    if (nums1[p1] > nums2[p2]) {
      nums1.splice(p1, 0, nums2[p2])
      p1++
      p2++
    } else {
      p1++
    }
  }
  const arr = nums2.slice(p2, n)

  let i = 0
  while (i < n) {
    nums1.pop()
    i++
  }
  nums1.push(...arr)
};