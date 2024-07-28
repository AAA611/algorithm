// method1 遍历判断
function isPrime(x) {
  for (let j = 2; j * j <= x; j++) {
    if (x % j == 0) {
      return false
    }
  }
  return true
}
var countPrimes = function (n) {
  let ans = 0
  for (let i = 2; i < n; i++) {
    isPrime(i) && ans++
  }
  return ans
}
console.log(countPrimes(7))

// method2 埃式筛
// 思路：如果x是质数那么2x,3x...一定不是质数
var countPrimes = function (n) {
  const isPrime = new Array(n).fill(1)
  let ans = 0
  for (let i = 2; i < n; ++i) {
    if (isPrime[i]) {
      ans += 1
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = 0
      }
    }
  }
  return ans
}