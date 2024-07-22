function quickSort(arr) {
  if (arr.length < 2) return arr
  const index = Math.floor(arr.length / 2)
  const mid = arr[index]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else if (arr[i] > mid) {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(mid).concat(quickSort(right))
}

// 📘思路：递归排序，每次递归将数据分为两块，左边小右边大，递归的终止条件是 arr.length < 2,因为这意味着 arr 已经有序

const data = [4, 2, 5, 7, 8, 0]
console.log(quickSort(data));