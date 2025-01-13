function addBinary(a,b) {
  let sum = a + b;
  let binary = sum.toString(2);
  return binary
}

let result = addBinary(5,9)
console.log(result)