console.log("Start");

Promise.resolve().then(() => {
  console.log("Inside Promise");

  setTimeout(() => {
    console.log("Inside Timeout");
  }, 0);
});

setTimeout(() => {
  console.log("End Timeout");
}, 0);

console.log("End");

// start
// end
// Inside Promise
// End Timeout
// Inside Timeout
