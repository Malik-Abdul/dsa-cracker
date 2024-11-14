console.log("Begin");

setTimeout(() => {
  console.log("Timeout A");

  const promise1 = new Promise((resolve) => {
    console.log("Promise 1");
    resolve("Resolved 1");
  });

  promise1.then((value) => {
    console.log(value);
  });

  Promise.resolve().then(() => {
    console.log("Promise B");

    setTimeout(() => {
      console.log("Timeout C");
    }, 0);
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise D");
});

console.log("Finish");
