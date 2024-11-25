function fibonaci(num, arr = [0, 1]) {
  if (arr.length < num) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibonaci(num, arr);
  }
  return arr;
}
// console.log("---------------------------------------");
// console.log("fibonaci");
// console.log(fibonaci(9));

function fibonaciPosition(num, arr = [0, 1]) {
  let arrSum = arr[arr.length - 1] + arr[arr.length - 2];
  if (arrSum <= num) {
    arr.push(arrSum);
    fibonaciPosition(num, arr);
  }
  return arr.indexOf(num);
}
// console.log("---------------------------------------");
// console.log("fibonaciPosition");
// console.log(fibonaciPosition(21));

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  } while (swapped);
  return arr;
}
// console.log("---------------------------------------");
// console.log("bubbleSort");
// console.log(bubbleSort([9, 7, 3, 5, 8]));

function diagonalPrint(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (j == k) {
        console.log(arr[j][k]);
      }
    }
  }
}
// console.log("---------------------------------------");
// console.log("diagonalPrint");
// console.log(
//   diagonalPrint([
//     [16, 21, 13],
//     [41, 51, 66],
//     [17, 81, 19],
//   ])
// );

function diagonalPrintReverse(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (k == arr[j].length - (j + 1)) {
        console.log(arr[j][k]);
      }
    }
  }
}
// console.log("---------------------------------------");
// console.log("diagonalPrintReverse");
// console.log(
//   diagonalPrintReverse([
//     [16, 21, 13],
//     [41, 51, 66],
//     [17, 81, 19],
//   ])
// );

const factorial = (num) => {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
// console.log("---------------------------------------");
// console.log("factorial");
// console.log(factorial(5));

const reverseString = (str) => {
  // return str.split("").reverse().join(""); // One line solution
  let revStr = "";
  for (let j = str.length - 1; j >= 0; j--) {
    revStr += str[j];
  }
  return revStr;
};
// console.log("---------------------------------------");
// console.log("reverseString");
// console.log(reverseString("QuickCat"));

const checkPalindrom = (str) => {
  // return str == str.split("").reverse().join("") ? true : false; // One line solution
  const mid = Math.floor(str.length / 2);
  let last = str.length - 1;
  for (let j = 0; j <= mid; j++) {
    if (str[j] != str[last]) {
      return false;
    } else {
      last--;
    }
  }
  return true;
};
// console.log("---------------------------------------");
// console.log("checkPalindrom");
// console.log(checkPalindrom("abcdcba"));

const findSingularArr = (arr) => {
  const charCounts = new Map();
  const singularArr = [];
  for (let j of arr) {
    if (charCounts[j]) {
      charCounts[j]++;
    } else {
      charCounts[j] = 1;
    }
  }
  for (let j in charCounts) {
    if (charCounts[j] < 2) {
      singularArr.push(j);
    }
  }
  return singularArr;
};
// console.log("---------------------------------------");
// console.log("findSingularArr");
// console.log(findSingularArr(["a", "b", "a", "c", "c"]));

const findSingularArrOpt = (arr) => {
  const stack = [];
  for (let j of arr) {
    if (stack.includes(j) && stack.length > 0) {
      stack.splice(j, 1);
    } else {
      stack.push(j);
    }
  }
  return stack;
};
// console.log("---------------------------------------");
// console.log("findSingularArrOpt");
// console.log(findSingularArrOpt(["a", "b", "a", "c", "c"]));

const findDuplicate = (arr) => {
  const charCounts = new Map();
  const singularArr = [];
  for (let j of arr) {
    if (charCounts[j]) {
      charCounts[j]++;
    } else {
      charCounts[j] = 1;
    }
  }
  for (let j in charCounts) {
    if (charCounts[j] > 1) {
      singularArr.push(j);
    }
  }
  return singularArr;
};
// console.log("---------------------------------------");
// console.log("findDuplicate");
// console.log(findDuplicate(["a", "b", "a", "c", "c"]));

const findDuplicateOpt = (arr) => {
  const charCounts = new Map();
  const duplicateArr = [];
  for (let j of arr) {
    if (charCounts.has(j)) {
      charCounts.set(j, charCounts.get(j) + 1);
      duplicateArr.push(j);
    } else {
      charCounts.set(j, 1);
    }
  }
  return duplicateArr;
};
// console.log("---------------------------------------");
// console.log("findDuplicateOpt");
// console.log(findDuplicateOpt(["a", "b", "a", "c", "c"]));

function removeAdjacent(arr) {
  const stack = [];
  for (let j = 0; j < arr.length; j++) {
    if (stack.length > 0 && stack[stack.length - 1] == arr[j]) {
      stack.pop();
    } else {
      stack.push(arr[j]);
    }
  }
  return stack;
}
// console.log("removeAdjacent");
// console.log(removeAdjacent(["a", "b", "c", "c", "b", "a"]));

const SkippOneSumofTwoEqualsToThird = (arr) => {
  for (let j = 0; j < arr.length; j++) {}
};
// console.log("---------------------------------------");
// console.log("SkippOneSumofTwoEqualsToThird");
// console.log(SkippOneSumofTwoEqualsToThird([1, 2, 3, 5]));

const flattenArray = (arr, result = []) => {
  for (let j = 0; j < arr.length; j++) {
    if (Array.isArray(arr[j])) {
      flattenArray(arr[j], result);
    } else {
      result.push(arr[j]);
    }
  }
  return result;
};
// console.log("---------------------------------------");
// console.log("flattenArray");
// console.log(flattenArray([1, [2, [3, [4, [5, [6, [7, 8]]]]]]]));

// find duplicate and count
const stringFindDuplicate = (str) => {
  const arr = str.split("");
  const countEach = [];
  const map = new Map();
  for (let j = 0; j < arr.length; j++) {
    if (map.has(arr[j])) {
      map.set(arr[j], map.get(arr[j]) + 1);
      countEach[arr[j]] = map.get(arr[j]);
    } else {
      map.set(arr[j], 1);
    }
  }
  console.log("countEach ===> ", countEach["a"], countEach);
  return map;
};

// console.log(stringFindDuplicate("abcdabrrddz"));

const MaximumSubarraySumKadanesAlgorithm = (arr) => {
  let res = arr[0];
  let maxEnd = arr[0];
  for (let j = 1; j < arr.length; j++) {
    maxEnd = Math.max(arr[j], arr[j] + maxEnd);
    res = Math.max(maxEnd, res);
  }
  return res;
};
// console.log(MaximumSubarraySumKadanesAlgorithm([2, 3, -8, 7, -1, 2, 3]));
// console.log(MaximumSubarraySumKadanesAlgorithm([5, 4, 1, 7, 8]));
// console.log(MaximumSubarraySumKadanesAlgorithm([1, 2, 3, -2, 5]));

// string reverse by words

const stringReverseByWords = (str) => {
  const arr = str.split(" ");
  let strReverse = "";
  for (let j = arr.length - 1; j >= 0; j--) {
    strReverse += arr[j] + " ";
  }
  return strReverse;
};

// console.log(stringReverseByWords("I am a software Engineer"));

const findFirstDistinctInString = (input) => {
  let firstDistinctChar = "";
  let str = input.toLowerCase();
  str = str.split(" ").join("");
  let obj = {};
  for (let j = 0; j < str.length; j++) {
    if (obj[str[j]]) {
      obj[str[j]]++;
    } else {
      obj[str[j]] = 1;
    }
  }
  for (let char in obj) {
    if (obj[char] == 1) {
      firstDistinctChar = char;
      break;
    }
  }
  return firstDistinctChar;
};
// console.log(findFirstDistinctInString("I am a software Engineer"));

const countCarryForwards = (n1, n2) => {
  let carryCount = 0;
  while (n1 > 0 && n2 > 0) {
    let digit1Num1 = n1 % 10;
    let digit1Num2 = n2 % 10;
    let carry = 0;
    let sum = digit1Num1 + digit1Num2;
    if (sum > 9) {
      carry = 1;
      carryCount++;
    }
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  return carryCount;
};
// console.log(countCarryForwards(678, 789));

const addingTwoThreeOrMoreDigitsNumbers = (n1, n2) => {
  let carryCount = 0;
  let ans = "";
  let carry = 0;
  while (n1 > 0 || n2 > 0) {
    let digit1Num1 = n1 % 10;
    let digit1Num2 = n2 % 10;

    let sum = digit1Num1 + digit1Num2 + carry;

    if (sum > 9) {
      carry = 1;
      carryCount++;
      sum = sum % 10;
    } else {
      carry = 0;
    }
    ans = sum + ans;
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }
  if (carry > 0) {
    ans = carry + ans;
  }
  return ans;
};
// console.log(addingTwoThreeOrMoreDigitsNumbers(678, 789));
// console.log(addingTwoThreeOrMoreDigitsNumbers(678, 45));

const fibonacciFirstNEvenNumbers = (num, arr = [0, 1], even = []) => {
  let sum = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(sum);

  if (sum % 2 == 0) {
    even.push(sum);
  }

  if (even.length < num) {
    return fibo(num, arr, even);
  } else {
    console.log(arr);
    return even;
  }
};

// console.log(fibonacciFirstNEvenNumbers(7));

const fibonaciiItrative = (num) => {
  let prevP = 0;
  let prev = 1;
  let arr = [];
  arr.push(prevP);
  arr.push(prev);
  for (let j = 0; j < num - 2; j++) {
    let next = prevP + prev;
    arr.push(next);
    prevP = prev;
    prev = next;
  }
  return arr;
};

// console.log(fibonaciiItrative(7));
