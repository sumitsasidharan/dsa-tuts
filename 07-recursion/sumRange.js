
function sumRange(num) {
   if (num === 1) return 1;
   return num + sumRange(num-1);
}

const result = sumRange(3);

console.log(result)