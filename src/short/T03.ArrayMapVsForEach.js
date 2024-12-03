let arr = [1, 2, 3];
console.log(arr.map((x) => x * 2));
console.log(arr.forEach((x) => x));

// The forEach method in JavaScript does not return anything (it returns undefined), which is why you're seeing undefined in your code. The purpose of forEach is to iterate over an array and execute a callback function for each element, but it doesn't produce a new array or any other
// Alternate
// arr.forEach((x) => console.log(x * 2));
