let { x = 5 } = { x: 10 };
console.log(x);

let { y = 5 } = { y: undefined };
console.log(y);
