var count = 20;
const obj = {
  count: 10,
  increment: () => this.count++,
};
console.log(obj.count); // 10
obj.increment();
console.log(count); //20
console.log(obj.count); // 11

// can be resolved as this way

console.log("---------------------");

var count1 = 20;
const obj1 = {
  count1: 10,
  increment: function () {
    this.count1++;
  },
};

obj1.increment();

// console.log(obj1.count1); // 11
// console.log(count1); // 20

console.log("---------------------");
console.log("this in Callbacks");

function Car() {
  this.speed = 0;

  setInterval(function () {
    this.speed++;
    console.log(this.speed);
  }, 1000);
}

const myCar = new Car();

// The setInterval function uses a regular function, so this will not refer to the Car instance but to the global object (window in a browser, or global in Node.js).
// This will lead to NaN being logged instead of an incrementing speed, as this.speed is undefined in the global context.
