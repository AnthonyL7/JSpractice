function getNewNotes(salary, bills) {
  let sum = 0;
  for (let i = 0; i < bills.length; i++) {
    sum += bills[i];
  }
  afterExpenses = salary - sum;
  if (afterExpenses >= 0 ) {
    return Math.floor(afterExpenses / 5);
  } else {
    return 0;
  }
}

result =  getNewNotes(2300, [590, 1500, 45, 655, 150])
console.log(result)