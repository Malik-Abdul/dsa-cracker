var topKFrequent = function (nums, k) {
  const obj = {};
  for (let j = 0; j < nums.length; j++) {
    if (obj[nums[j]]) {
      obj[nums[j]]++;
    } else {
      obj[nums[j]] = 1;
    }
  }

  const firstKth = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => Number(key));

  return firstKth;
};

var topKFrequent2 = function (nums, k) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  const sortedMap = [...map].sort((a, b) => b[1] - a[1]);
  return sortedMap.slice(0, k).map((item) => item[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent2([1, 1, 1, 2, 2, 3], 2));
