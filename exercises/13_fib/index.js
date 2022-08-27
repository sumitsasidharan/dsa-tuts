// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib1(n) {
   const result = [0, 1];

   for (let i = 2; i <= n; i++) {
      // add previous 2 elements
      // const a = result[result.length - 1]
      const a = result[i - 1];
      const b = result[i - 2];

      result.push(a + b);
   }

   return result[n];
}

// IMP - EXPONENTIAL LOG (2 ^ N)
// using recursion
function slowFib(n) {
   if (n < 2) {
      return n;
   }

   // IMP - returning the memoized function below. (not slowFib)
   // we need to call the memoized version of the fib()
   return fib(n - 1) + fib(n - 2);
}

// THE MEMOIZE FUNCTION
function memoize(fn) {
   const cache = {};

   return function(...args) {
      // checking if we have called this function with this set of arguments
      //  if yes, return the cache
      if (cache[args]) {
         return cache[args];
      }

      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
   }
}

const fib = memoize(slowFib);

module.exports = fib;
