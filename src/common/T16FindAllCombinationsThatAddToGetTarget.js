// Find all combinations in an array that summ to get target

function findCombinations(arr, target) {
  let allCombinations = [];
  const backtracaking = (subIndex, subCombinations, sum) => {
    if (sum == target) {
      allCombinations.push([...subCombinations]);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let j = subIndex; j < arr.length; j++) {
      subCombinations.push(arr[j]);
      backtracaking(j + 1, subCombinations, sum + arr[j]);
      subCombinations.pop();
    }
  };

  backtracaking(0, [], 0);
  return allCombinations;
}

console.log(findCombinations([1, 2, 3, 4, 5, 6, 7], 15));
