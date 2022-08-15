// Reverse a string

// Solution 1 - convert it into an array, reverse the array, turn the array back into string

// Solution 2 - create empty string, loop through each character, return the reversed string

// One LIne console.log(str.split("").reverse().join(""));


// MY SOLUTION
function reverse(str) {
   let arr = str.split('')

   const newArray = [];

   for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i])
   }

   const reversedString = newArray.join('')

   console.log('The reversed string is ' + reversedString);
}


// Solution 1
function reverse2(str) {
   const arr = str.split("").reverse().join("")
   console.log(arr);
}


// Solution 2
function reverse3(str) {
   let reversed = '';

   for (let char of str) {
      reversed = char + reversed;
   }
   console.log({reversed})
}

reverse3('big!');