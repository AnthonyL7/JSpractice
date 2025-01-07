// palindrome function
function palindrome(str) {
  const reverse = str.split('').reverse().join('')
  if (str === reverse) {
    return true
  } else {
    return false
  }
}

console.log(palindrome('tacos'))
