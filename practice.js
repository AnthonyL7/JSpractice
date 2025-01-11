function nbYear(p0, percent, aug, p) {
  let num = 0
  for (let i = 0; i < p; i++) {
    if (p[i] < p) {
      num += 1
      return num
    }

  }
}

result = nbYear(1500, 5, 100, 5000)
console.log(result)