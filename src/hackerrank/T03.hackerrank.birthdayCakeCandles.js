// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

const birthdayCakeCandles = (candles) => {
  let max = candles[0];
  let countMax = {};
  for (let j of candles) {
    if (max < j) {
      max = j;
    }
    if (countMax[j]) {
      countMax[j]++;
    } else {
      countMax[j] = 1;
    }
  }
  return countMax[max];
};

console.log(birthdayCakeCandles([4, 4, 1, 3]));
// console.log(birthdayCakeCandles([44, 53, 31, 27, 77, 60, 66, 77, 26, 36]));
