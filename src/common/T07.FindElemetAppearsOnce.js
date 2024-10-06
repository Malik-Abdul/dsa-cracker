// To find and return the elements that appear exactly once in the input list
const findElemetAppearsOnce = (input) => {
  const obj = new Object();
  for (let char of input) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  const charsRepeatedOneTime = [];
  for (char in obj) {
    if (obj[char] == 1) {
      charsRepeatedOneTime.push(char);
    }
  }

  return charsRepeatedOneTime.toString();
};
console.log(findElemetAppearsOnce([1, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6]));
