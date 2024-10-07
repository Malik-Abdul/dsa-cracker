// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
const CalculateRatiosPositiveNegativeZero = (arr) => {
  const obj = new Object();
  obj["positive"] = 0;
  obj["zero"] = 0;
  obj["negative"] = 0;

  const total = arr.length;

  for (let num of arr) {
    if (num > 0) {
      obj["positive"]++;
    } else if (num == 0) {
      obj["zero"]++;
    } else if (num < 0) {
      obj["negative"]++;
    }
  }

  console.log((obj["positive"] / total).toFixed(6));
  console.log((obj["negative"] / total).toFixed(6));
  console.log((obj["zero"] / total).toFixed(6));
};

console.log(CalculateRatiosPositiveNegativeZero([1, 1, 0, -1, -1]));
console.log(CalculateRatiosPositiveNegativeZero([-4, 3, -9, 0, 4, 1]));
// expected
// 0.500000
// 0.333333
// 0.166667
