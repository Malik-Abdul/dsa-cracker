function TrappingRainWaterProblem(arr) {
  const min = arr[0];
  const max = arr[arr.length - 1];
  let total = 0;
  for (let j = 1; j < arr.length - 1; j++) {
    let subTotal = Math.min(min, max) - arr[j];
    if (subTotal > 0) {
      console.log("subTotal ===> ", subTotal);
      total = total + subTotal;
    }
  }
  return total;
}

// console.log(TrappingRainWaterProblem([3, 0, 1, 2, 5]));
// console.log(TrappingRainWaterProblem([10, 9, 0, 5]));
// console.log(TrappingRainWaterProblem([1, 2, 3, 4]));
// console.log(TrappingRainWaterProblem([3, 0, 2, 0, 4]));
console.log(TrappingRainWaterProblem([3, 0, 1, 0, 4, 0, 2]));
