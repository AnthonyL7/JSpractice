// fibonacci function
function fibonacci(num) {
  if (num <= 0) return [];
   
  if (num === 1) return [0];
  
  return Array(num).fill(0).map((_, i) => {
    if (i === 0) return 0;
    if (i === 1) return 1;
    return fibonacci(i)[i - 1] + fibonacci(i)[i - 2];
  });
}

console.log(fibonacci(10))
