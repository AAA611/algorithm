// function insertSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {

//     let j = i + 1
//     let k = j - 1
//     const temp = arr[j]
//     while (arr[j] < arr[k]) {
//       k--
//     }
//     k++
//     for (let m = j; m > k; m--) {
//       arr[m] = arr[m - 1]
//     }

//     arr[k] = temp

//     console.log(k, j);
//   }

//   return arr
// }

// console.log(selectSort([2, 3, 1, 0, 4, 5, 7, 21, 234, 5, 43, 3, 456, 64, -1, 0]));


function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    const temp = arr[min]
    arr[min] = arr[i]
    arr[i] = temp
  }
  return arr
}

console.log(insertSort([2, 3, 1]));

// 属于稳定排序