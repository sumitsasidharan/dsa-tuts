// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// word.replace(/[^\w]/g, "")

// my solution
function anagramsDemo(stringA, stringB) {
   if (stringA.length !== stringB.length) {
      return false;
   }

   let obj1 = {};
   let obj2 = {};

   for (let char of stringA) {
      obj1[char] ? obj1[char]++ : (obj1[char] = 1);
   }

   for (let char of stringB) {
      obj2[char] ? obj2[char]++ : (obj2[char] = 1);
   }

   for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
         return false;
      }
   }

   return true;
}

// helper function to build a character map object
function buildCharMap(str) {
   let charMap = {};

   // remove special characters, convert to lowercase
   const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
   
   for (const char of cleanedStr) {
      charMap[char] = charMap[char] + 1 || 1;
      // charMap[char] ? charMap[char]++ : (charMap[char] = 1);
   }

   return charMap;
}

// solution
function anagrams(stringA, stringB) {
   const charMap1 = buildCharMap(stringA);
   const charMap2 = buildCharMap(stringB);

   // IMP - check if both strings are of equals lengths
   // Object.keys() returns an array of keys
   if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
      return false;
   }

   for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) {
         return false;
      }
   }

   return true;
}

console.log({
   testcase1: anagrams('sumit', 'timus'),
   testcase2: anagrams('apple!!', 'orange'),
   testcase3: anagrams('ponnu', 'nonpu'),
});

module.exports = anagrams;
