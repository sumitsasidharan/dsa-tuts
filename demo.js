
function pairs(n) {
   for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= i; j++) {
         console.log(i,j)
      }
   }
}

function logAtLeast5(n) {
   for (let i = 1; i <= Math.max(5, n); i++) {
      console.log(i)
   }
}

function logAtMost5(n) {
   for (let i = 1; i <= Math.min(5, n); i++) {
      console.log(i)
   }
}

logAtMost5(2)