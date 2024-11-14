setTimeout(() => {
  console.log("X");

  Promise.resolve().then(() => {
    console.log("Y");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Z");

  setTimeout(() => {
    console.log("W");
  }, 0);
});
