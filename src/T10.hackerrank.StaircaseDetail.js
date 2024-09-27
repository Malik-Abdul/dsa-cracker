// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true

function staircase(n) {
  let spaces = n - 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "#";
    }
    console.log(str.padStart(str.length + spaces));
    spaces--;
  }
}
staircase(6);
