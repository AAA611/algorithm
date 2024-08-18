const arr = [2, 4, 1, 1]

function insertSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i]
    let j = i - 1
    while (j >= 0 && cur < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    j++
    arr[j] = cur
  }

  return arr
}

console.log(insertSort(arr));

// 稳定排序