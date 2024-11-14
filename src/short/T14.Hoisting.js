console.log("---------------------");
console.log("Variable Hoisting with var, let, and const");

// console.log(hoist); // undefined

var hoist = 10;

console.log(hoist2); // ReferenceError: hoist2 is not defined

// console.log(hoist3); // ReferenceError: Cannot access 'hoist3' before initialization
let hoist3 = 3;
