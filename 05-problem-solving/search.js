// NAIVE SOLUTION, Time Complexity O(N)
function search(arr, val) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
         return i;
      }
   }

   return -1;
}


// searching in a sorted array, Time Complexity Log(N) - Binary Search
function search(arr, val) {
   let min = 0;
   let max = arr.length - 1;

   while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = arr[middle];

      if (arr[middle] < val) {
         min = middle + 1;
      }
      else if (arr[middle] > val) {
         max = middle - 1;
      }
      else {
         return middle;
      }
   }

   return -1;
}

