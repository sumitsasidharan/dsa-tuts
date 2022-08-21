// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//   row 0  '  #  '
//   row 1  ' ### '
//   row 2  '#####'

// solution 1
// For row 0, columns are 3, for row 1, columns are 5, etc.
// make out the relationship b/2 rows and columns, ie how many columns needed for each row, in this case it's 2 * n - 1
function pyramid1(n) {
   const midpoint = Math.floor((2 * n - 1) / 2);

   for (let row = 0; row < n; row++) {
      let level = '';

      // run inner loop till the length of columns needed
      for (let column = 0; column < 2 * n - 1; column++) {
         if (midpoint - row <= column && midpoint + row >= column) {
            level += '#';
         } else {
            level += ' ';
         }
      }

      console.log(level);
   }
}

function pyramid(n) {}

pyramid1(6)

module.exports = pyramid;
