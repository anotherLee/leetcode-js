const input1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,8,8,9,9,9,10,10,10]
const output1 = 4
const solution1 = function(deck) {
  const str = deck.join('').split('').sort().join('') // 需要处理多位数的情况
  const group = str.match(/(\d)\1+|\d/g)
  while (group.length > 1) {
    const a = group.pop().length
    const b = group.pop().length
    const v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.push('0'.repeat(v))
    }
  }
  return group.length ? group[0].length > 1: false // 这里要测试边界问题
};

const gcd = (a, b) => {
  const temp = a % b
  if (temp === 0) {
    return b
  } else {
    return gcd(b, temp)
  }
}

console.log(solution1(input1))
