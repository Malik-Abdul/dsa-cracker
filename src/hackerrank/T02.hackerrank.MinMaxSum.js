// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
const miniMaxSum = (arr) => {
  // Get minimum & maximum

  const minimum = Math.min(...arr);
  const maximum = Math.max(...arr);

  let minSum = 0;
  let maxSum = 0;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== maximum) {
      minSum = minSum + arr[k];
    }
    if (arr[k] !== minimum) {
      maxSum = maxSum + arr[k];
    }
  }
  console.log(minSum, maxSum);
};
// miniMaxSum([1, 3, 5, 7, 9]); // Expected: 24 16 Actual: 24 16
// miniMaxSum([1, 2, 3, 4, 5]); // Expected: 10 14 Actual: 10 14
// miniMaxSum([5, 5, 5, 5, 5]); // Expected: 20 20 Actual: 0 0  failed

// Updated Code

const miniMaxSum2 = (arr) => {
  // Get minimum & maximum

  const minimum = Math.min(...arr);
  const maximum = Math.max(...arr);
  const minIndex = arr.indexOf(minimum);
  const maxIndex = arr.indexOf(maximum);

  let minSum = 0;
  let maxSum = 0;
  for (let k = 0; k < arr.length; k++) {
    if (k !== maxIndex) {
      minSum = minSum + arr[k];
    }
    if (k !== minIndex) {
      maxSum = maxSum + arr[k];
    }
  }
  console.log(minSum, maxSum);
};

miniMaxSum2([1, 3, 5, 7, 9]); // 24 16
miniMaxSum2([1, 2, 3, 4, 5]); // 10 14
miniMaxSum2([5, 5, 5, 5, 5]); // 20 20
