function add(a,b) {
  return a+b
}

console.log(add(2,2))

function subtract(a,b) {
  return a-b
}

console.log(subtract(4,2))

sumArray = [1,2,3,4];

const initialValue = 0
const sumWithI = sumArray.reduce((total, initialValue) => total + initialValue);

console.log(sumWithI)

const multiply = sumArray.reduce((total, initialValue) => total * initialValue);

console.log(multiply)

function power(a,b) {
  return Math.pow(a,b)
}

console.log(power(3,2))

function factor(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factor(num-1))
  }
}

console.log(factor(5))
