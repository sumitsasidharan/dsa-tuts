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
      let firstLetter = item.slice(0, 1).toUpperCase();
      let capitalized = firstLetter + item.slice(1);
      newArray.push(capitalized);
   }

   return newArray.join(' ');
}



function capitalize(str) {}

module.exports = capitalize;
