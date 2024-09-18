// Check sum of all Elements are exixt in array and skip the element that is equal to sum

const sum = (array) => {
  for (let i = 0; i < array.length; i++) {
    let skipped = array[i];
    let tempArray = [...array];
    tempArray.splice(i, 1);
    let sum = tempArray.reduce((acc, item) => acc + item);
    if (sum == skipped) {
      return true;
    }
  }
  return false;
};
console.log(sum([1, 2, 3, 6]));
console.log(sum([1, 2, 3, 6, 12]));
