// check palindrome, return true or false

// Algorithm: 1. reverse the string, 2. check with the original if they are same.

// MY SOLUTION
function checkPalindrome(str) {
   let reversed = '';
   for (let char of str) {
      reversed = char + reversed;
   }

   if (reversed === str) {
      console.log(str + " is a palindrome")
      return true
   } else {
      console.log(str + ' is NOT a palindrome');
      return false
   }
}

// Efficient SolutionS
const palindrome = (str) => {
   let isPalindrome = false
   const reversed = str.split('').reverse().join('')

   if (reversed === str) {
      console.log(str + ' is a palindrome');
      isPalindrome = true;
   } else {
      console.log(str + ' is NOT a palindrome');
      isPalindrome = false;
   }

   return isPalindrome;
}

(function(str) {
   
})("david")

palindrome('ABIGAIL')
palindrome('HANNAH')