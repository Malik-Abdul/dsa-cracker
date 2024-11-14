console.log("Begin");

setTimeout(() => {
  console.log("Timeout A");

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
