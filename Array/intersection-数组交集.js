const arrList = [
  [1, 31, 34, 62],
  [33, 32, 4, 61, 5, 10],
  [63, 33, 7, 36, 8, 100, 200]
]

function intersection(arrList) {
  const buildMap = (arr) => {
    const map = Object.create(null)
    arr.forEach(item => {
      if (map[item]) {
        map[item] = map[item] + 1
      } else {
        map[item] = 1
      }
    })
    return map
  }

  const res = []
  const mapList = arrList.map(arr => buildMap(arr))

  let minLenArr = arrList[0]
  for (let i = 1; i < arrList.length; i++) {
    if (arrList[i].length < minLenArr.length) {
      minLenArr = arrList[i]
    }
  }

  for (const item of minLenArr) {
    let isBreak = false
    for (const map of mapList) {
      if (!map[item]) {
        isBreak = true
        break
      }
    }
    if (!isBreak) {
      for (const map of mapList) {
        map[item] = map[item] - 1
      }
      res.push(item)
    }
  }

  return res
}

console.log(intersection(arrList));
