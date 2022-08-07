// check if all characters in a string are unique

// My solution
function isUnique(str) {
   let obj = {};

   for (let char of str) {
      obj[char] ? obj[char]++ : (obj[char] = 1);
      if (obj[char] > 1) {
         return false;
      }
   }
   // console.log(obj);

   // for (let key in obj) {
   //    if (obj[key] > 1) {
   //       return false;
   //    }
   // }

   return true;
}

console.log({
   isUniqueTest1: isUnique('sumit'),
   isUniqueTest2: isUnique('ponnu'),
   isUniqueTest3: isUnique('anil'),
});

// solution 2
function checkUnique(str) {
   let set = new Set(str);
   if (set.size === str.length) return true;
   return false;
}
