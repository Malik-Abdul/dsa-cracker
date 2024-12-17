//www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card
// Find the maximum sum of a subarray of size k in an array.

https: function MaxSubArraySum(arr, k) {
  console.log(arr);
  let currentSum = 0;
  for (let j = 0; j < k; j++) {
    currentSum += arr[j];
  }
  let maxSum = currentSum;
  for (let i = k; i < arr.length; i++) {
    // console.log(arr[i - k], arr[i]);
    currentSum = currentSum - arr[i - k] + arr[i];
    // if (maxSum < currentSum) {
    //   maxSum = currentSum;
    // }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// console.log(MaxSubArraySum([100, 200, 300, 400], 2)); // 700
console.log(MaxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(MaxSubArraySum([2, 3], 3)); // NAN
// console.log(MaxSubArraySum([2, 1, 5, 1, 3, 2], 3)); // 9
// console.log(MaxSubArraySum([1, 2, 3, 4, 5], 2)); // 9
// console.log(MaxSubArraySum([4, -1, 2, 1, -5, 4], 3)); // 5
// console.log(MaxSubArraySum([3, 5, 1, 8, 2], 1)); // 8
// console.log(MaxSubArraySum([1, 2], 2)); // 3
