// Divide an array into chunks of n 

const chunks = (arr, n) => {
   const chunked = [];

   for (let elem of arr) {
      let last = chunked[chunked.length - 1];

      if (!last || last.length === n)
         chunked.push([elem])
      else
         last.push(elem)
   }

   return chunked;
}

console.log(chunks([2, 3, 7, 9, 8, 17, 1, 88, 92, 23, 44], 10))