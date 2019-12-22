const input1 = 'abab', output1 = true
const input2 = 'aba', output2 = false
const input3 = 'abcabcabc', output3 = true
const input4 = 'aabaaba', output4 = false

const solution1 = (str) => {
  const reg = /^(\w+)\1+$/
  return reg.test(str)
}

console.log(solution1(input4))
