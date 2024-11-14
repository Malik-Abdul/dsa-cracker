function FindTheMissingNumber(arr) {
  const num_set = new Set(arr);
  for (let j = 1; j <= arr.length + 1; j++) {
    if (!num_set.has(j)) {
      return j;
    }
  }
}

console.log(FindTheMissingNumber([1, 2, 4, 6, 3, 7, 8]));
console.log(FindTheMissingNumber([1, 2, 3, 5]));
console.log(FindTheMissingNumber([1]));
