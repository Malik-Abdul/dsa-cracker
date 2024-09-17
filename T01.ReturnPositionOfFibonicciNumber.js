const fibo = (num, pos, array) => {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(nextToLast + last);
    num = num - 1;
  }
  console.log(array);
  return array[pos];
};
console.log(fibo(12, 9, [0, 1]));

const fiboPos = (pos) => {
  console.log(`Pos ===> ${pos}`);
  if (pos < 2) {
    return pos;
  }
  return fiboPos(pos - 1) + fiboPos(pos - 2);
};

console.log(fiboPos(8));
