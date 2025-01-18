function stray(numbers) {
  for (let i of numbers) { 
    let count = 0;
    for (let j of numbers) {
      if (i === j) {
        count++
      }
    }
    if (count === 1) {
      return i
    }
  }
  return -1
}

let result =  stray([17, 17, 3, 17, 17, 17, 17])
console.log(result)