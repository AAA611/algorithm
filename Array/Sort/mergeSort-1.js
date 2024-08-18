const arr = [3, 2, 1, 8]

function merge(list1, list2) {
  const res = []

  let p1 = 0
  let p2 = 0
  while (p1 < list1.length && p2 < list2.length) {
    if (list1[p1] < list2[p2]) {
      res.push(list1[p1])
      p1++
    } else {
      res.push(list2[p2])
      p2++
    }
  }

  if (p1 < list1.length) {
    return [...res, ...list1.slice(p1)]
  } else {
    return [...res, ...list2.slice(p2)]
  }
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}

console.log(mergeSort(arr));