const input = "Let's take LeetCode contest"
const output = "s'teL ekat edoCteeL tsetnoc"

const solution1 = s => {
  return s.split(' ').map(str => {
    return str.split('').reverse().join('')
  }).join(' ')
}

console.log('solution1: ', solution1(input) === output)

const solution2 = s => {
  return s.split(/\s/).map(str => {
    return str.split('').reverse().join('')
  }).join(' ')
}

console.log('solution2: ', solution2(input) === output)

const solution3 = s => {
  return s.match(/[\w']+/g).map(str => {
    return str.split('').reverse().join('')
  }).join(' ')
}

console.log('solution3: ', solution3(input) === output)