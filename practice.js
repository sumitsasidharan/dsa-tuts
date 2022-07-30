function anagram(str1, str2) {
   if (str1.length !== str2.length) {
      console.log('Unequal Length...')
      return;
   }

   let obj = {}
   for (let i = 0; i < str1.length; i++) {
      let letter = str1[i];
      obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
   }
   console.log('after 1st loop: ', obj)

   for (let i = 0; i < str2.length; i++) {
      let letter = str2[i];
      if (!obj[letter]) {
         return false;
      } else {
         obj[letter] -= 1;
      }
   }
   console.log('after 2nd loop: ', obj);
   return true;
}


const result = anagram('ponnu', 'nonpu')
console.log(result)