// Reverse an integer

function reverseInt(num) {
   // convert the number  string & reverse
   let reversed_Int = parseInt(num.toString().split('').reverse().join(''))

   if (num < 0) {
      return reversed_Int * -1;
   }

   return reversed_Int;
}

console.log({
   testcase1: reverseInt(4),
   testcase2: reverseInt(9876),
   testcase3: reverseInt(-125),
});
// { testcase1: 874521, testcase2: 56699, testcase3: 521 }