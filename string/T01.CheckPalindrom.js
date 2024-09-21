const CheckPalindrom = (str) => {
  let last = str.length - 1;
  const mid = Math.floor(str.length / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] != str[last]) {
      return false;
    }
    last--;
  }
  return true;
};

const stringOne = "abcdcba";
console.log(CheckPalindrom(stringOne));
