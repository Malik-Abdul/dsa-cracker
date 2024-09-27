// Write a function that removes adjacent duplicate elements from an array.

const remove = (arr) => {
  let removeItem;
  do {
    removeItem = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == arr[j + 1]) {
        removeItem = true;
        arr.splice(j, 2);
      }
    }
  } while (remove);
  return arr;
};

// console.log(remove(["a", "b", "c", "c", "b", "a"]));

// The above program has Time complexity: 𝑂(𝑛2) and can be optimise

const removeItem = (arr) => {
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }
  return stack;
};

console.log(removeItem(["a", "b", "c", "c", "b", "a"]));

// This program has Time complexity: 𝑂(𝑛)
