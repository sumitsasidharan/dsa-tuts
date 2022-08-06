// find the character that appears maximum number of times
/*   
ALGORITHM:
1. generate key-value pair
   i. create an object
   ii. if the character of str does not exist in obj, then set its value to 1
   iii. if it does, do an increment
2. loop through the values of  the  object to see which one has the highest value
*/

// Solution
function getMax(str) {
   let obj = {}

   for (let char of str) {
      obj[char] ? obj[char]++ : obj[char] = 1;
   }

   console.log(obj)
   let maxNum = 0;
   let maxChar = '';

   for (const key in obj) {
      if (obj[key] >= maxNum) {
         maxNum = obj[key];
         maxChar = key
      }
   }

   console.log(`${maxChar} appears ${maxNum} times`)
}

getMax("$$$    77aa")