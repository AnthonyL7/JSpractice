function reverseWords(str) {
  let reversed = str.split("").reverse().join("")
  return reversed.split(' ').reverse().join(' ')
}

let result = reverseWords('The quick brown fox jumps over the lazy dog.')
console.log(result)