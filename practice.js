function removeChar(str) {
 let first = str.slice(1)
 let fixed = first.substring(0, first.length - 1)
 return fixed
}

result =  removeChar('eloquent')
console.log(result)