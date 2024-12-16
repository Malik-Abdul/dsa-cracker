// https://leetcode.com/problems/valid-parentheses/description/?utm_source=instabyte.io&utm_medium=referral&utm_campaign=interview-master-100

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Example 4:
// Input: s = "([])"
// Output: true

var isValid = function (s) {
  const obj = {};
  //   const expected = {"(", ")", "{", "}", "[", "]"};
  for (let j = 0; j < s.length; j++) {
    if (expected.includes(s[j])) {
    }
    // if (obj[s[j]]) obj[s[j]]++;
    // else {
    //   obj[s[j]] = 1;
    // }
  }
  console.log(obj);
};

console.log(isValid("()"));
