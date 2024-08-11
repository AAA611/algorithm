const arr = [21, 5, 7, 1]

function merge(leftArr, rightArr) {
  const res = []
  let l = 0
  let r = 0
  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      res.push(leftArr[l])
      l++
    } else {
      res.push(rightArr[r])
      r++
    }
  }

  if (l < leftArr.length) {
    res.push(...leftArr.slice(l))
  } else if (r < rightArr.length) {
    res.push(...rightArr.slice(r))
  }

  return res
}
function mergeSort(arr) {
  if (arr.length === 1) return arr

  const middle = Math.floor(arr.length / 2)

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

console.log(mergeSort(arr));

// 📘思路：拆分然后合并两个最小的数组
