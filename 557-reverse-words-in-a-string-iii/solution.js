const input = "Let's take LeetCode contest"
const output = "s'teL ekat edoCteeL tsetnoc"

const solution = s => {
  return s.split(' ').map(str => {
    return str.split('').reverse().join('')
  }).join(' ')
}

console.log(solution(input) === output)