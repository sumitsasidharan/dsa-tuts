
function reverse(arr) {
   console.log('Original array: ', arr)
   let start = 0
   let end = arr.length - 1

   for (let i = 0; i < arr.length - 1;  i++) {
      let temp = arr[start];
      arr[start] = arr[end]
      arr[end] = temp;

      start += 1
      end -= 1
   }

   console.log('Reversed Array: ', arr);
}

reverse([2, 4, 6, 8, 10])