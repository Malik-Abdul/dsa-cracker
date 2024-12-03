// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
// Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.
function MaximumSubarraySum(arr) {
  let res = arr[0];
  for (let j = 0; j < arr.length; j++) {
    let sum = 0;
    for (let i = j; i < arr.length; i++) {
      sum = sum + arr[i];
      res = Math.max(res, sum);
    }
  }

  return res;
}

// console.log(MaximumSubarraySum([2, 3, -8, 7, -1, 2, 3])); // 11
// console.log(MaximumSubarraySum([-2, -4]));
// console.log(MaximumSubarraySum([5, 4, 1, 7, 8]));
// console.log(MaximumSubarraySum([1, 2, 3, -2, 5]));

function MaximumSubarraySumWithKadanesMethod(arr) {
  let maxSum = arr[0];
  let currSum = arr[0];
  for (let j = 1; j < arr.length; j++) {
    if (currSum < 0) {
      currSum = arr[j];
    } else {
      currSum = currSum + arr[j];
    }
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(MaximumSubarraySumWithKadanesMethod([2, 3, -8, 7, -1, 2, 3])); // 11
// console.log(MaximumSubarraySumWithKadanesMethod([-2, -4])); // -2
// console.log(MaximumSubarraySumWithKadanesMethod([5, 4, 1, 7, 8])); // 25
console.log(MaximumSubarraySumWithKadanesMethod([1, 2, 3, -2, 5])); // 9
