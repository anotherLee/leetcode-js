const input1 = [1,0,0,0,0,1], n = 2

/*
 * i++ 也可以通过种上的方式来解决
 */
const solution1 = (arr, n) => {
  let max = 0
  for (let i=0; i<arr.length; ++i) {
    const current = arr[i]
    if (current === 1) {
      if ((i === 0 && arr[i+1] === 0) || (i===0 && arr[i+1] === undefined)) {
        max++
        i++
      } else if (i === arr.length - 1 && arr[i-1] === 0) {
        max++
        i++
      } else if (arr[i-1] === 0 && arr[i+1] === 0) {
        max++
      }
    }
    return n <= max
  }
}
console.log(solution1(input1, n))
