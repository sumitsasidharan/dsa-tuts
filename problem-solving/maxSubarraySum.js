// write a function which accepts an array of integers and a number called n. the function should  calculate the maximum sum of n consecutive elements in the array.

// NAIVE SOLUTION with nested loops, O(n^2)
function maxSubarraySum(arr, num) {
   if (num > arr.length) {
      return null;
   }

   let max = -Infinity;
   for (let i = 0; i < arr.length - num + 1; i++) {
      temp = 0;
      for (let j = 0; j < num; j++) {
         // if index of i is 1,  the value of j will start from 1
         temp += arr[i + j];
      }
      if (temp > max) {
         max = temp;
      }
   }
   return max;
}

// const result = maxSubarraySum([1, 2, 3, 4, 5], 3);
// console.log(result);

// REFACTOR / BETTER SOLUTION (SLIDING WINDOW)
// Time Complexity - O(N)
function maxSubarraySum2(arr, num) {
   let maxSum = 0;
   let tempSum = 0;
   if (arr.length < num) return null;

   for (let i = 0; i < num; i++) {
      maxSum += arr[i];
   }
   tempSum = maxSum;

   for (let i = num; i < arr.length; i++) {
      // minus the first, add the next (or first item in the new array)
      // if num is 3, minus 0 add 4th index
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
   }

   return maxSum;
}

const result = maxSubarraySum2([1, 2, 3, 4, 5], 3);
console.log(result);