var longestSquareStreak = function (nums) {
  nums.sort((a, b) => a - b);
  const squaresArr = [];
  let square = 1;
  let last = nums[0];
  for (let k = 0; k < nums.length; k++) {
    square = nums[k] * nums[k];

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] != nums[k]) {
        if (square == nums[j]) {
          if (!squaresArr.includes(nums[k])) {
            squaresArr.push(nums[k]);
            last = square;
          }
        }
      }
    }
  }
  if (squaresArr.length > 0) {
    squaresArr.push(last);
  }

  return squaresArr.length > 0 ? squaresArr.length : -1;
};

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2])); // //  squaresArr ===>  [ 16, 4, 2 ] , 3
// console.log(longestSquareStreak([2, 3, 5, 6, 7])); // // squaresArr ===>  [] , -1
// console.log(longestSquareStreak([2, 4, 8, 16])); // // squaresArr ===>  [ 4, 2, 16 ] , 3

// console.log(longestSquareStreak([2, 4, 4, 2])); // // squaresArr ===>  [ 4, 2 ] , 2
// console.log(longestSquareStreak([2, 4])); // // squaresArr ===>  [ 2, 4 ] , 2

// console.log(longestSquareStreak([2, 4, 3, 5])); // // squaresArr ===>  [ 2, 4 ] , 2
