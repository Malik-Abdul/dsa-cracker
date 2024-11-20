const countCarryForwards = (n1, n2) => {
  let carryCount = 0;
  while (n1 > 0 && n2 > 0) {
    let digit1Num1 = n1 % 10;
    let digit1Num2 = n2 % 10;
    let carry = 0;
    let sum = digit1Num1 + digit1Num2;
    if (sum > 9) {
      carry = 1;
      carryCount++;
    }
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  return carryCount;
};
console.log(countCarryForwards(678, 789));
