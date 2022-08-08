/*
write a method to replace all  spaces in a string with "%20".
Assume that there is sufficient space at the end.

input: "Mr John Smith"
output: Mr%20John%20Smith

*/


function urlify(str, n) {
   let newStr = "";

   for (let i = 0; i < n; i++) {
      if (str[i] === " ") {
         newStr += '%20';
      } else {
         newStr += str[i];
      }
   }

   return newStr;
}


console.log({
   testcase1: urlify('Sumit rocks', 11),
   testcase2: urlify(' are you ponnu', 10),
});