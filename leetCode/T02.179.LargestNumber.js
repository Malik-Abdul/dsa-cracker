// https://leetcode.com/problems/largest-number/
// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function (nums) {
  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j + 1]) {
        let combineA = Number(nums[j].toString() + nums[j + 1].toString());
        let combineB = Number(nums[j + 1].toString() + nums[j].toString());

        if (combineA < combineB) {
          swapped = true;
          let temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
  } while (swapped);
  let result = nums.join("");
  if (result[0] === "0") {
    return "0";
  }

  return result;
};

console.log(largestNumber([0, 0]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));

// 3, 34, 5, 9, 30

// 34, 5, 9, 3, 30

// 5, 9, 34, 3, 30

// 9, 5, 34, 3, 30

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
// Output: "9 5 34 3 30"

// Input: nums = [10,2]
// Output: "210"

// 10,2,3
// 2,3,10
// 3,2,10
