function rentalCarCost(d) {
  cost = 40
  if (d >= 7 ) {
    return (40*d) - 50
  } else if (d >= 3 && d < 7) {
    return (40*d) - 20
  } else {
    return 40*d
  }
}

result = rentalCarCost(15)
console.log(result)