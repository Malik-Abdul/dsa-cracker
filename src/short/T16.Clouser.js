const outerFunction = () => {
  let val1 = "From outer";
  const innerFunction = () => {
    let val2 = "From Inner";
    console.log(val1);
    console.log(val2);
  };
  return innerFunction;
};

// const outerFn = outerFunction();
// console.log(outerFn());
// From outer
// From Inner

const outerFunction2 = () => {
  let val1 = "From outer";
  const innerFunction2 = () => {
    let val2 = "From Inner";
    console.log(val1);
    console.log(val2);
  };
  const innerInFunction = () => {
    console.log(val2);
  };
  return [innerFunction2, innerInFunction];
};

const outerFn2 = outerFunction2();
// console.log(outerFn2()); // outerFn2 is not a function

console.log(outerFn2[0]());
// From outer
// From Inner

// console.log(outerFn2[1]()); // val2 is not defined
