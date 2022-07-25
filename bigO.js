// Sum of n numbers
/* Method 1 */

function addUpTo(n) {
   if (n < 0) {
      alert('Negative Number!!')
   }

   let total = 0;
   for (let i = 1; i <= n; i++) {
      total += i;
   }

   return total;
}


/* Method 2 */

function addUpTo2(n) {
   return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpTo2(1000000000);
let t2 = performance.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


// Count Up & Down
function countUpAndDown(n) {
   console.log("Going Up!")
   for (let i = 0; i < n; i++) {
      console.log(i)
   }

   console.log("At the top! \nGoing down...");
   for (let j = n -1; j >= 0; j--) {
      console.log(j)
   }

   console.log("Back down. Bye!")
}

// countUpAndDown(100);

function printAllPairs(n) {
   for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
         console.log(i, j);
      }
   }
}

printAllPairs(5);