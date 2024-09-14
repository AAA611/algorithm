// 选择排序思想：每次从剩下的未排序的元素里面选择一个最小的元素加入到已排序的末尾

/**
 * @param {number[]} arr 
 */
function selectSort(arr) {
  if (!arr) return
  const len = arr.length
  if (!len) return []

  for (let i = 0; i < len - 1; i++) {
    let min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }

  return arr
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const nums = [5, 3, 3, 6875, 79]
console.log(selectSort(nums))