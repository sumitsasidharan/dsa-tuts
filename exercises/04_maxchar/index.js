// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
function maxChar1(str) {
   const chars = {};

   for (let char of str) {
      // chars[char] ? chars[char]++ : chars[char] = 1;
      chars[char] = chars[char] + 1 || 1;
   }

   let max = 0;
   let mxChar;
   for (let char in chars) {
      if (chars[char] > max) {
         max = chars[char];
         mxChar = char
      }
   }

   return mxChar;
}

console.log({
   testcase1: maxChar('sumit'),
   testcase2: maxChar('abba'),
   testcase3: maxChar('abcddeee'),
});

// Solution
function maxChar(str) {
   const charMap = {};
   let max = 0;
   let maxChar = "";

   for (let char of str) {
      if (charMap[char]) {
         charMap[char]++;
      } else {
         charMap[char] = 1;
      }
   }

   for (let char in charMap) {
      if (charMap[char] > max) {
         max = charMap[char];
         maxChar = char;
      }
   }

   return maxChar;
}

module.exports = maxChar;
