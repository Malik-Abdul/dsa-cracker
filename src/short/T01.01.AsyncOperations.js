// What would change if we moved the setTimeout calls to the top of the code?

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("Start");

const promise1 = new Promise((resolve) => {
  console.log("Promise 1");
  resolve("Resolved 1");
});

promise1.then((value) => {
  console.log(value);
});

const promise2 = new Promise((resolve) => {
  console.log("Promise 2");
  resolve("Resolved 2");
});

promise2.then((value) => {
  console.log(value);
});

console.log("End");

// Now, the event loop picks the microtasks first:
// promise1.then logs "Resolved 1".
// promise2.then logs "Resolved 2".

// Finally, the event loop processes the macrotasks in order:
// Timeout 1 logs "Timeout 1".
// Timeout 2 logs "Timeout 2".
