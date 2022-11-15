function primenumber(param1, param2) {
  let primearr = [];
  let sum = 0;

  for (let i = param1; i < param2; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      primearr.push(i);
    }
  }
  sum = primearr.reduce(function (acc, curr) {
    return acc + curr;
  });

  return {
    "Prime Numbers": primearr,
    "Sum of Prime numbers": sum,
  };
}

console.log(primenumber(25, 99));
