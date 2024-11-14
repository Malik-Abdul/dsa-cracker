console.log(null || 2 || undefined);
// 2

console.log("" && "Hello"); // ""

// n JavaScript, the && (logical AND) operator evaluates expressions from left to right and returns the first "falsy" value it encounters. If all values are "truthy," it returns the last value. Here’s how it applies to your example:

console.log("AAA" && "BB"); // BB
