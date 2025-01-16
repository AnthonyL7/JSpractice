function getSum(a,b) {
  let sum = 0;
  if (a > b) {
    for (let i = b; i <= a; i++) {
    
      sum += i
    }
    return sum 
  
   } else {

    for (let i = a; i <= b; i++) {
      
      sum += i
    }
    return sum 
  }
}

let result =  getSum(-1,2)
console.log(result)