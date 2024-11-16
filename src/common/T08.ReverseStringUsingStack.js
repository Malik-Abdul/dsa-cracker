const reverseString = (str) => {
  const arr = [];

  //   arr.push("a");
  //   arr.push("b");
  //   arr.push("c");

  //   arr.pop();

  for (let j = 0; j < str.length; j++) {
    arr.push(str[j]);
  }
  console.log("arr aa ===> ", arr);

  for (let j = 0; j < arr.length; j++) {
    arr.pop();
    console.log("arr ===> ", arr);
  }
};

console.log(reverseString("abcdef"));
