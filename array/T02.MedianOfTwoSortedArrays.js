// Given two sorted arrays nums1 and nums2 of size m and n
// respectively, return the median of the two sorted arrays.
// 4. Search in Rotated Sorted Array
// Given the array nums after the possible rotation and an integer
// target, return the index of the target if it is in nums, or -1 if it is
// not in nums.
// The overall run time complexity should be O(log (m+n)).
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and the median is 2.

const median = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2];

  const sortedArray = mergedArray.sort((a, b) => a - b);
  const length = sortedArray.length;
  if (length % 2 == 0) {
    return (sortedArray[length / 2 - 1] + sortedArray[length / 2]) / 2;
  } else {
    return sortedArray[Math.floor(length / 2)];
  }
};
console.log(median([1, 3, 4], [2]));
