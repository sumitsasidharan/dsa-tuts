# AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)

## IMP NOTES
   Jest Command: 
   jest <path> --watch


### Steps for Debugging

      1. To debug a file or run debugger, add a 'debugger' statement in your function.
      2. Call the function manually.
      3. At the terminal, run `node inspect filename.js`.
      4. To continue execution of the file, press 'c' then 'enter'.
      5. To launch a 'repl' session, type 'repl' and <enter>. You can type variable names or code to debug.
      6. To exit the 'repl', press control + C. To exit debut, type '.exit'.

## 1. Reverse a String

### Algorithm

      1. Create an empty string called 'reversed'
      2. for each character in the provided string
         - Take the character and add it to the start of 'reversed'.
      3. Return the variable 'reversed'

## 8. Capitalize first letter of a string

### Algorithm 1

      1. Make an empty array 'words'.
      2. Split the input string by spaces to get an array.
      3. For each word in the array
         - Uppercase the first letter of the word. (use slice method).
         - Join the first letter with the rest of the string.
         - Push result into 'words' array.
      4. Finally, join 'words' back into a string and return.

### Algorithm 2

      1. Make an empty string called 'result', with first character of the input string capitalized.
      2. For each character in the string
            IF the character to the left a space
               Capitalize it and add it to the 'result'
            ELSE
               Add it to 'result'.

## 9. Create '#' steps for a given number n.

### Algorithm

      1. From 0 to n (iterate through rows)
         Create an empty string, 'stair'
         From 0 to n (loop through columns)
            IF the current column is equal to or less than the current row
               Add a '#' to 'stair'
            ELSE
               Add a space to 'stair;
         Console log 'stair'.