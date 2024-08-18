// 样例输入：s = "3[a2[c]]"
// 样例输出：accaccacc


const s = "ag6tr3[a2[c2[y]]]"
function decodeS(s) {
  let i = 0
  const fn = (s) => {
    let cur = ''
    let num = ''
    while (i < s.length) {
      let c = s[i]
      if (/[a-z]/.test(c)) {        
        cur += c
        i++
      } else if (/[0-9]/.test(c)) {        
        num += c
        i++
      } else if (c === '[') {
        i++
        cur += fn(s).repeat(num)
      } else if (c === ']') {
        return cur
      }
    }
  }

  return fn(s)
}

console.log(decodeS(s));
