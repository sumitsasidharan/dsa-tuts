/*
Remove all spaces from a string, except one space between words.
input: "  sumit    sasidharan    "
output: "sumit sasidharan"

*/

function removeSpaces(str) {
    let removed = str.trim().split(' ')
    console.log("removed: ", removed)
    let newArray = []

    for (const char of removed) {
        if (char !== "") {
            newArray.push(char)
        }
    }

    console.log(newArray.join(' '))
    return newArray.join(' ')
}



console.log({
   testcase1: removeSpaces('Sumit   rocks    '),
   testcase2: removeSpaces(' sumit  technical     keens'),
});