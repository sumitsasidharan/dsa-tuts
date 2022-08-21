// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// my solution
function capitalizeDemo(str) {
   const newArray = [];

   for (const item of str.split(' ')) {
      let capitalized = item[0].toUpperCase() + item.slice(1);
      newArray.push(capitalized);
   }

   return newArray.join(' ');
}


// solution 1
function capitalize1(str) {
   const words = [];

   for (let word of str.split(' ')) {
      words.push(word[0].toUpperCase() + word.slice(1));
   }

   return words.join(' ');
}

// solution 2
function capitalize(str) {
   let result = str[0].toUpperCase();

   for (let i = 1; i < str.length; i++) {
      if (str[i - 1] === ' ') {
         result += str[i].toUpperCase();
      } else {
         result += str[i];
      }
   }

   return result;
}

console.log({
   testcase1: capitalize('sumit sasidharan'),
   testcase2: capitalize('i like coding on pC'),
   testcase3: capitalize('i like to play games.'),
});

module.exports = capitalize;
