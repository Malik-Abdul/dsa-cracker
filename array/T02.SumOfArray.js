// Given an array , write a JavaScript function that, for each element in the array, temporarily removes that element and checks if the sum of any two of the remaining three numbers is equal to the third.

// Test Case 1 => [1, 2, 3, 6] When skipping 6 the 1 + 2 = 3
// Test Case 2 => [1, 2, 3, 5]
// Test Case 3 => [10, 15, 20, 30]

const checkSum2 = (array) => {
  console.log("array ===> ", array);
  for (let i = 0; i < array.length; i++) {
    let tempArray = [...array];
    tempArray.splice(i, 1);
    const [a, b, c] = tempArray;
    if (a + b == c) {
      console.log(`Skipping ${array[i]}: ${a} + ${b} = ${c}`);
      return true;
    } else if (a + c == b) {
      console.log(`Skipping ${array[i]}: ${a} + ${c} = ${b}`);
      return true;
    } else if (b + c == a) {
      console.log(`Skipping ${array[i]}: ${b} + ${c} = ${a}`);
      return true;
    }
  }
  return false;
};

console.log(checkSum2([1, 2, 3, 6])); // Skipping 6: 1 + 2 = 3
console.log(checkSum2([1, 2, 3, 5])); // Skipping 1: 2 + 3 = 5
console.log(checkSum2([10, 15, 20, 30])); // Skipping 15: 10 + 20 = 30
