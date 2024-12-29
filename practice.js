function isPalindrome(x) {
  x = x.toLowerCase()
  reversed = x.split('').reverse().join('')
  if (x == reversed) {
    return true
  } else {
    return false
  }
}

result = isPalindrome('AbBa')
console.log(result)