// Write a program to print to the screen numbers 1 to n. For multiples of 3, print 'fizz'; for multiples of 5, print 'buzz'; for multiples of both 3 and 5 print 'fizzbuzz'

// solution 1
function fizzbuzz1(num) {
   for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         console.log('FizzBuzz');
      } else if (i % 3 === 0) {
         console.log('Fizz');
      } else if (i % 5 === 0) {
         console.log('Buzz');
      } else {
         console.log(i);
      }
   }
}

// solution 2
// console.log([...Array(100)].map((_,i)=>{i++;return(i%15?'':'Spider')||(i%5?'':'Ghost')||(i%3?'':'Rat')||i;}).join('\n'));

function ratSpiderGhost() {
   console.log(
      [...Array(25)]
         .map((_, i) => {
            i++;
            return (
               (i % 15 ? '' : 'Spider') ||
               (i % 5 ? '' : 'Ghost') ||
               (i % 3 ? '' : 'Rat') ||
               i
            );
         })
         .join('\n')
   );
}



function fizzbuzz2(n) {
   let x = 0;
   let y = 0;
   for (let i = 1; i <= n; i++) {
      var result = '';
      x = i % 3;
      y = i % 5;
      if (x === 0 && y === 0) result += 'fizzbuzz';
      else if (x === 0) result += 'fizz';
      else if (y === 0) result += 'buzz';
      console.log(result || i);
   }
}

// fizzbuzz2(15);

// check which numbers can be divided by both 3 and 5
function divide3n5(n) {
   for (let i = 1; i <= n; i++ ) {
      if (i % 3 === 0 && i % 5 === 0 ) {
         console.log(i)
      }
   }
}

// divide3n5(100);