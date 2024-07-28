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

// 如何高效率判断质数：
// 在判断一个数是否为质数的过程中，使用 i * i <= num 作为循环条件是为了提高效率。
// 这个条件利用了数学上的一个事实：如果一个数 n 不是质数，那么它一定可以分解为两个因数，其中至少一个因数小于或等于根号 n