// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my solution
function vowelsDemo(str) {
   let count = 0;
   let vowelsArray = ['a', 'e', 'i', 'o', 'u'];

   for (let char of str.toLowerCase()) {
      if (vowelsArray.includes(char)) {
         count += 1;
      }
   }

   return count;
}

// solution 1
function vowels1(str) {
   let count = 0;
   const checker = ['a', 'e', 'i', 'o', 'u'];

   for (let char of str.toLowerCase()) {
      if (checker.includes(char)) {
         count++;
      }
   }

   return count;
}

// solution 1
function vowels(str) {
   // i stands for case insensitive
   const matches = str.match(/[aeiou]/gi);
   return matches ? matches.length : 0
}

console.log({
   testcase1: vowels("India"),
   testcase2: vowels("apples and oranges"),
   testcase3: vowels("South Korea"),
})

module.exports = vowels;