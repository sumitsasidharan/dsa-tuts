// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i - 1); j++) {
         if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j + 1] = temp;
         }
      }
   }

   return arr;
}

function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;

      for (let j = i+1; j < arr.length; j++) {
         if (arr[j] < arr[indexOfMin]) {
            indexOfMin = j;
         }
      }

      if (indexOfMin !== i) {
         let lesser = arr[indexOfMin];
         arr[indexOfMin] = arr[i];
         arr[i] = lesser;
      }
   }

   return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

console.log(bubbleSort([2, 77, 23, 3, 76, 22, 11, 5, 99]))
console.log(selectionSort([2, 77, 23, 3, 76, 22, 11, 5, 99]));

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
