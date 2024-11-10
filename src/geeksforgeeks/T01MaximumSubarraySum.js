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

console.log(MaximumSubarraySum([2, 3, -8, 7, -1, 2, 3]));
console.log(MaximumSubarraySum([-2, -4]));
console.log(MaximumSubarraySum([5, 4, 1, 7, 8]));
