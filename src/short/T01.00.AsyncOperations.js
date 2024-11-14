console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

const promise1 = new Promise((resolve) => {
  console.log("Promise 1");
  resolve("Resolved 1");
});

promise1.then((value) => {
  console.log(value);
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

const promise2 = new Promise((resolve) => {
  console.log("Promise 2");
  resolve("Resolved 2");
});

promise2.then((value) => {
  console.log(value);
});

console.log("End");

// Output:
// Start
// Promise 1
// Promise 2
// End
// Resolved 1
// Resolved 2
// Timeout 1
// Timeout 2

// Explanation

//  Timeout 1 is scheduled but won’t execute until the call stack is clear (it’s a macrotask)

// The promise1 is created, and "Promise 1" is logged immediately. Then promise1 is resolved with "Resolved 1".

// promise1.then This callback is added to the microtask queue, waiting to execute after the main stack finishes.

// Timeout 2 It is also scheduled in the macrotask queue after the first setTimeout

// // promise2 is created, logging "Promise 2" immediately, and then resolves with "Resolved 2".

// The promise2.then callback is also added to the microtask queue.

// Now, the event loop picks the microtasks first:
// promise1.then logs "Resolved 1".
// promise2.then logs "Resolved 2".

// Finally, the event loop processes the macrotasks in order:
// Timeout 1 logs "Timeout 1".
// Timeout 2 logs "Timeout 2".
