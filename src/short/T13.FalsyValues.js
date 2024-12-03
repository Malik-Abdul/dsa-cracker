// // console.log(x);
// var x = 6;
// // console.log(x);
// x = 10;

// for (var i = 0; i < 3; i++) {
//   //   setTimeout(() => console.log(i), 0);
// }
// setTimeout is asynchronous and var declares a function-scoped variable. By the time the setTimeout callbacks execute, the loop has already completed, and the value of i is 3

// for (let i = 0; i < 3; i++) {
//   //   setTimeout(() => console.log(i), 0);
// }

// Falsy Values

console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean("text")); // true

// In JavaScript, the Boolean() function is used to convert values to their boolean (true/false) equivalents based on whether the value is considered "truthy" or "falsy."

// Boolean(""):
// An empty string "" is considered a "falsy" value in JavaScript.
// Falsy values are those that, when converted to a boolean, result in false.
// Therefore, Boolean("") returns false.
