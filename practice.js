function sumArray(array) {
  let min = Math.min(...array)
  let max = Math.max(...array)
  let sum = 0;
  console.log(min, max)
  if (!Array.isArray(array) || array.length <= 1) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] != min && array[i] != max) {
      sum = sum + array[i]
    }
  } 
  return sum
}

let result =  sumArray([3,5,7,10])
console.log(result)