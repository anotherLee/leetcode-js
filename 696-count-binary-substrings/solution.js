const input1 = "00110011"
const output1 = 6
const input2 = "10101"
const output2 = 4
const input3 = "00110"
const output3 = 3

var solution1 = function (s) {
  let resultCount = 0
  for (let i = 0; i < s.length - 1; ++i) {
    if (check(s.slice(i))) {
      resultCount++
    }
  }
  return resultCount
};

function check(subString) {
  const a = subString.match(/^0+|1+/)[0]
  const b = (a[0] ^ 1).toString().repeat(a.length)
  return subString.startsWith(a + b)
}

console.log(solution1(input3))