const input1 = 0, output1 = [0]
const input2 = 1, output2 = [0,1]

const solution1 = (n) => {
  return make(n).map(item => parseInt(item, 2))
}

const make = n => {
  if (n ===1) {
    return [0, 1]
  } else {
    const prev = make(n-1)
    const result = []
    const maxLength = Math.pow(2, n) - 1
    for (let i=0; i<prev.length; ++i) {
      result[i] = `0${prev[i]}`
      result[maxLength - i] = `1${prev[i]}`
    }
    return result
  }
}

console.log(solution1(input2))
