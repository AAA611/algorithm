function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > val) {
      arr[j + 1] = arr[j]
      j--
    }

    arr[j + 1] = val
  }

  return arr
}

console.log(insertSort([2, 5, 6, 8, 2, 1, 1, 5, 4, 3, 2]));

// 思路：使用 while 内循环比较，边比较边移动元素的位置

// 属于稳定算法