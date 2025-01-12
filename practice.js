/*function nbYear(p0, percent, aug, p) {
  let num = 0;
  for (let i = 0; i <= p; i++) {
    if (((p0 + (p0 * (percent * 0.10))) + aug)) {
      num ++;
      return num;  
    }
  }
}

result = nbYear(1500, 5, 100, 5000)
console.log(result)
*/

function nbYear(p0, percent, aug, p) {
  let num = 0;
  let calculation = p0

  while (calculation < p) {
    num++;
    p0 += Math.floor((p0 * (percent * 0.01)) + aug)
    calculation = p0;
  }
  return num
}

console.log(nbYear(1000, 2.0, 50, 1214))
