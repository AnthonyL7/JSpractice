// add7 function
function add7(num) {
  return num + 7
}
console.log(add7(10))

// multiply function
function multiply(a,b) {
  return a*b
}
console.log(multiply(5,5))

// capitalize function
function capitalize(str) {
  let insensitive = str.toLowerCase()
  return insensitive.charAt(0).toUpperCase() + insensitive.slice(1)
}

console.log(capitalize('NaMe'))


// lastLetter function
function lastLetter(s) {
  return s.charAt(s.length-1);
}

console.log(lastLetter('abcd'))