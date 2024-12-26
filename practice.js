//sum strings
function sumStr(a,b) {
  let numA = Number(a);
  let numB = Number(b);
  const sum = numA + numB
  let strA = sum.toString();
  return strA
}
let result = sumStr('4', '5');

console.log(result);