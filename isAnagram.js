// Given two strings, write a function to check if they anagrams of each other.

function createObj(str) {
   let obj = {};
   for (let char of str) {
      !obj[char] ? (obj[char] = 1) : obj[char]++;
   }
   return obj;
}

function isAnagram(str1, str2) {
   // check if they are the same
   if (str1 === str2) {
      return true;
   }

   // check the lengths of both strings
   if (str1.length !== str2.length) {
      return false;
   }

   // create objects for both
   const obj1 = createObj(str1);
   const obj2 = createObj(str2);

   for (let key in obj1) {
      if (obj1[key] !== obj2[key]) {
         return false;
      }
   }

   return true;
}

console.log({
   testcase1: isAnagram('jm', 'mj'),
   testcase2: isAnagram("apple", 'grapes'),
   testcase3: isAnagram("pearl", 'learp'),
});