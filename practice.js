function getAge(inputString) {
  let split =  inputString.split('')
  return parseInt(split[0])
}

let result = getAge('4 years old')
console.log(result)