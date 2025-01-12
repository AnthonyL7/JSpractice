
function countSheep(num) {
  let str = ''
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      str += i + " " + "sheep...";
    }
    return str;
  } else {
    return '';
  }
}

console.log(countSheep(3))
