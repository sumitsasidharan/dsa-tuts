// Pointers here are usually array indices

// write a program to find a pair that sums to zero.
// NAIVE SOLUTION

function sumZero(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[i] + arr[j] === 0) {
            console.log(`The pairs are [${arr[i]}] and [${arr[j]}]`);
            return;
            // return [arr[i], arr[j]];
         }
      }
   }

   console.log('Sorry, No Pairs....');
}

// sumZero([-3, -2, -1, 0, 1, 2, 3]);

// BETTER SOLUTION
function sumZero2(arr) {
   let left = 0;
   let right = arr.length - 1;

   while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
         console.log([arr[left], arr[right]]);
         return [arr[left], arr[right]];
      } else if (sum < 0) {
         left++;
      } else {
         right--;
      }
   }
   console.log('Sorry, No Pairs....');
}

// sumZero2([-2, -1, 0, 1, 3, 4, 55]);

// Write a program to count unique values in a sorted array
function countUniqueValues(arr) {
   if (arr.length === 0) return 0;

   let i = 0;
   for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
         i++;
         arr[i] = arr[j];
      }
   }
   return i + 1;
}

const result = countUniqueValues([1,1,2,3,3,3,5])
console.log(result);