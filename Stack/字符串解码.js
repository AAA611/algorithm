// 样例输入：s = "3[a2[c]]"
// 样例输出：accaccacc


const s = "ag6tr3[a2[c2[y]]]"
function decodeS(s) {
  let i = 0;


  // 递归函数的作用：计算[]里面的计算结果
  // 递归的跳出条件：当前字符不是 [ 的时候就不会进入递归函数了
  // 递归函数的返回值：[] 中的结果
  const fn = () => {
    let cur = '';
    let num = '';

    while (i < s.length) {
      let c = s[i];

      if (/[a-z]/.test(c)) {
        cur += c;
        i++;
      } else if (/[0-9]/.test(c)) {
        num += c;
        i++;
      } else if (c === '[') {
        i++;
        const nested = fn(); // 获取递归的结果
        cur += nested.repeat(parseInt(num)); // 正确地重复字符串
        num = ''; // 重置 num
      } else if (c === ']') {
        i++;
        return cur;
      }
    }

    return cur;
  };

  return fn(); // 调用fn并返回最终结果
}

console.log(decodeS(s));
