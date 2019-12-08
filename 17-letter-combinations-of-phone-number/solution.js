const input1 = '23'
const output1 = ["ad","ae","af","bd","be","bf","cd","ce","cf"]

const solution1 = digits => {
  const mapArray = [,, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  const code = []
  if (!digits) return []
  if (digits.length === 1) return mapArray[digits].split('')
  digits.split('').forEach(d => {
    if (mapArray[d]) {
      code.push(mapArray[d])
    }
  })
  return comb(code)
}

const comb = arr => {
  const temp = []
  for(let i=0; i<arr[0].length; ++i) {
    for(let j=0; j<arr[1].length; ++j) {
      temp.push(`${arr[0][i]}${arr[1][j]}`)
    }
  }
  arr.splice(0,2,temp)
  if (arr.length > 1) {
    return comb(arr)
  } else {
    return temp
  }
}

console.log(solution1(''))
console.log(solution1('2'))
console.log(solution1(input1))
