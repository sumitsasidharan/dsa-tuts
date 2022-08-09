// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let reversedString = "";

   for (let i = 0; i < str.length; i++) {
      reversedString = str[i] + reversedString;
   }

   return reversedString;
}

console.log(reverse('sumit'));

module.exports = reverse;
