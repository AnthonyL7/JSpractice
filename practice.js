function problem(x) {
  if (typeof(x) === 'number') {
    return (x * 50) + 6
  } else {
    return 'Error'
  }
}

let result =  problem(5.5)
console.log(result)