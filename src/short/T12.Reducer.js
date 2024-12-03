// console.log([1, 2, 3].reduce((x, y) => x + y));
// console.log([1, 2, 3].reduce((x, y) => x + y, 2));

// console.log([1, 2, 3].reduce((x, y) => x * y));
// console.log([1, 2, 3].reduce((x, y) => x * y, 0));

const max = (a, b) => {
  console.log(a, b);
  return Math.max(a, b);
};

// console.log([1, 2, 3].reduce((x, y) => max(x, y))); // 3
// console.log([1, 2, 3].reduce(max, 10)); // 10
// console.log([1, 2, 3].reduce(max)); // 3
console.log([3].reduce(max)); // 3
