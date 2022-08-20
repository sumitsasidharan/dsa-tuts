// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my solution
function chunkedArray(array, size) {
   // Initiate an empty array called chunked
   const chunked = [];

   // Loop through all the elements of the given input array
   for (const elem of array) {
      // Initiate a new Array called chunk, new elements will be pushed into this last Array, until the it's length is equal to the give size
      const last = chunked[chunked.length - 1];

      if (!last || last.length === size) {
         // every time a new [elem] is pushed to chunked array, it's length is increased by 1, then last points to the next chunk
         chunked.push([elem])
      } else {
         last.push(elem);
      }
   }

   return chunked;
}

// Solution 1
function chunk1(array, size) {
   const chunked = [];

   for (let element of array) {
      // initiate an array to store the last chunk
      const last = chunked[chunked.length - 1];

      if (!last || last.length === size) {
         chunked.push([element]);
      } else {
         last.push(element);
      }
   }

   return chunked;
}

// Solution 2
function chunk(array, size) {
   const chunked = [];
   let index = 0;

   while (index < array.length) {
      chunked.push(array.slice(index, index + size));
      index += size;
   }

   return chunked;
}

console.log({
   testcase1: chunk([2,3,4, 7,8.6], 2),
   testcase2: chunk([2,3,4, 7,8.6], 3),
   testcase3: chunk([2,3,4, 7,8.6], 4),
})

module.exports = chunk;
