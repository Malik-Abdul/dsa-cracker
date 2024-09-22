// Write a function match that takes no arguments and finds the positions of consecutive characters from the pattern string within the string. The function should iterate through both strings, string = "abcdefgh" and pattern = "def", and return an object showing the position (index) of each consecutive character of the pattern found in the string.

const match = (string, pattern) => {
  const matchPosition = {};

  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (pattern[i] == string[j]) {
        matchPosition[pattern[i]] = j;
        i++;
      }
      if (!pattern[i]) {
        return matchPosition;
      }
    }
  }
};

const string2 = "abcdiouxyzf";
const pattern2 = "abcdf";

console.log("Data ===> ", match(string2, pattern2));

const string3 = "abcdefghijklmnopqrstuvwxyz";
const pattern3 = "aeiou";

console.log("Data ===> ", match(string3, pattern3));
