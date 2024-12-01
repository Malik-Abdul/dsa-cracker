const addingTwoThreeOrMoreDigitsNumbers = (n1, n2) => {
  let carryCount = 0;
  let ans = "";
  let carry = 0;
  while (n1 > 0 || n2 > 0) {
    let digit1Num1 = n1 % 10;
    let digit1Num2 = n2 % 10;

    let sum = digit1Num1 + digit1Num2 + carry;

    if (sum > 9) {
      carry = 1;
      carryCount++;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    ans = sum + ans;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  if (carry > 0) {
    ans = carry + ans;
  }
  return ans;
};
console.log(addingTwoThreeOrMoreDigitsNumbers(678, 789));
console.log(addingTwoThreeOrMoreDigitsNumbers(678, 45));
