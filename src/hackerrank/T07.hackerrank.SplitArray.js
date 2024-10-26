// https://www.hackerrank.com/challenges/array-splitting/problem?isFullScreen=true
const arraySplitting = (arr, points = 0) => {
  function helper(start, end) {
    let totalSum = 0;
    for (let i = start; i <= end; i++) {
      totalSum += arr[i];
    }

    let leftSum = 0;
    for (let i = start; i < end; i++) {
      leftSum += arr[i];
      let rightSum = totalSum - leftSum;

      // If a valid partition is found
      if (leftSum === rightSum) {
        // Recursively check the left or right part and return the score
        return 1 + Math.max(helper(start, i), helper(i + 1, end));
      }
    }

    // No partition possible, return 0
    return 0;
  }
};
// console.log(arraySplitting([1, 2, 3, 6]));
// console.log(arraySplitting([3]));
console.log(arraySplitting([4, 1, 0, 1, 1, 0, 1]));

// 3
// 3
// 3 3 3
// 4
// 2 2 2 2
// 7
// 4 1 0 1 1 0 1
