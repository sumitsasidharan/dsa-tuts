// write a program to count strings

function charCount(str) {
   const result = {};

   for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (/[a-z0-9]/.test(char)) {
         if (result[char] > 0) {
            result[char]++;
         } else {
            result[char] = 1;
         }
      }
   }

   console.log(result);
   return result;
}

// Same function with for of loop
function charCount2(str) {
   const obj = {};

   for (let char of str) {
      char = char.toLowerCase();
      if (/[a-z0-9]/.test(char)) {
         // RHS - if it's truthy, add 1 else return 1
         obj[char] = ++obj[char] || 1;
      }
   }

   return obj;
}

// Same function using isAlphanumeric function
function charCount3(str) {
   const obj = {};

   for (let char of str) {
      if (isAlphaNumeric(char)) {
         char = char.toLowerCase();
         // RHS - if it's truthy, add 1 else return 1
         obj[char] = ++obj[char] || 1;
      }
   }

   console.log(obj)
   return obj;
}

function isAlphaNumeric(char) {
   let code = char.charCodeAt(0);
   if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
      return false;
   }
   return true;
}


charCount3('ponnu and sumit');