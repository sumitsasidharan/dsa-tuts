// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* using inbuilt methods
   reversed Array = arr.split('').reverse().join('')
*/

// My Solution
function reverse(str) {
   let reversedString = '';

   for (let i = 0; i < str.length; i++) {
      console.log(
         `Iteration ${i}: reversedString = ${str[i]} + ${reversedString}`
      );

      reversedString = str[i] + reversedString;
   }

   return reversedString;
}

// Stephen's solution 1
function reverseString(str) {
   let reversed = '';

   for (const char of str) {
      reversed = char + reversed;
   }

   return reversed;
}

// Stephen's solution 2
function reverseString2(str) {
   return str.split('').reduce((rev, char) => char + rev, '');
}

// console.log(reverseString2('sumit'));

module.exports = reverse;
