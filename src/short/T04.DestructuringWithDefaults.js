let { x = 5 } = { x: 10 };
console.log(x); // 10

let { y = 5 } = { y: undefined };
console.log(y); // 5
