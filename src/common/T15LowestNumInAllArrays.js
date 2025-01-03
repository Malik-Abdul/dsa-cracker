// Find lowest Num that is repeating in all arrays and return -1 if not any

function findLowestCommon() {
  const obj = {};
  const countEachElement = (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]]) {
        obj[arr[j]]++;
      } else {
        obj[arr[j]] = 1;
      }
    }
    return obj;
  };
  countEachElement(arr1);
  countEachElement(arr2);
  countEachElement(arr3);

  let common = [];
  for (let element in obj) {
    if (obj[element] == 3) {
      common.push(element);
    }
  }
  if (common.length == 0) {
    return -1;
  } else {
    const lowestCommon = common.sort((a, b) => Number(a[1]) - Number(b[1]));
    return lowestCommon[0];
  }
}
const arr1 = [1, 2, 3, 4, 180, 120, 200];
const arr2 = [11, 12, 13, 14, 180, 120, 300];
const arr3 = [111, 112, 113, 114, 180, 120, 400];
console.log(findLowestCommon(arr1, arr2, arr2));
