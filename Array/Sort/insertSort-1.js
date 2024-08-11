function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]
    let j = i - 1
    while (j >= 0 && val < arr[j]) { // ⭐ 这里要特别注意，要使用 val 而不是 arr[i],因为 arr[i] 在下面的过程中会改变
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = val
  }
  return arr
}

console.log(insertSort([2, 3, 4, 1]));