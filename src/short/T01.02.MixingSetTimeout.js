console.log("A");

setTimeout(() => {
  console.log("B");
}, 100);

setTimeout(() => {
  console.log("C");
}, 0);

Promise.resolve().then(() => {
  console.log("D");
});

console.log("E");
