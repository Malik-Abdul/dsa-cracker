const arrayOfChars = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

const strOfAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const displayAsciiCode = (str) => {
  const map = new Map();
  for (let j = 0; j < str.length; j++) {
    map.set(str[j], 65 + j);
  }
  return map;
};

const asciMap = displayAsciiCode(strOfAlphabets);
console.log(`Asci valule of A is: ${asciMap.get("A")}`);
console.log(`Asci valule of T is: ${asciMap.get("T")}`);
console.log(`Asci valule of Z is: ${asciMap.get("Z")}`);
