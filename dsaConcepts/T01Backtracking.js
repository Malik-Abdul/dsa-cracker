function generateSubsets(nums) {
  const result = []; // Store all subsets here

  function backtrack(start, subset) {
    result.push([...subset]); // Add the current subset to the result

    console.log("subset ===> ", subset);

    // Explore further elements to include in the subset
    for (let i = start; i < nums.length; i++) {
      subset.push(nums[i]); // Include nums[i] in subset
      backtrack(i + 1, subset); // Move to the next element
      subset.pop(); // Remove the last element to backtrack
    }
  }

  backtrack(0, []); // Start with an empty subset
  console.log("====================================");

  return result;
}

console.log(generateSubsets([1, 2, 3]));
// Expected output: [ [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ]
