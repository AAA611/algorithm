/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  trips.sort((a, b) => a[1] - b[1])
  const hasDown = {}
  let passengers = trips[0][0]

  if (passengers > capacity) return false

  for (let i = 1; i < trips.length; i++) {
    const c = trips[i]
    passengers += c[0]

    let j = i - 1
    while (j >= 0) {
      if (!hasDown[j] && c[1] >= trips[j][2]) {
        passengers -= trips[j][0]
        hasDown[j] = true
      }
      j--
    }

    if (passengers > capacity) {
      return false
    }
  }

  return true

  // ⭐方法二，更优的解法

  // const stops = Array(1001).fill(0);  // 假设地点的范围是 0-1000
  // for (const [numPassengers, startLocation, endLocation] of trips) {
  //     stops[startLocation] += numPassengers;
  //     stops[endLocation] -= numPassengers;
  // }

  // let currentPassengers = 0;
  // for (let i = 0; i < stops.length; i++) {
  //     currentPassengers += stops[i];
  //     if (currentPassengers > capacity) {
  //         return false;
  //     }
  // }
  // return true;
};