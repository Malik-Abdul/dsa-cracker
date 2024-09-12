// Description

// Given an array of integer nums and an integer target, return indices of the two numbers such that they add up to the target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9 Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const arraySum = (array, num) => {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    const diff = num - array[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(array[i], i);
  }
};

console.log(arraySum([2, 7, 11, 15], 9));
console.log(arraySum([11, 7, 15, 2], 9));
console.log(arraySum([2, 7, 8, 9, 13], 15));
