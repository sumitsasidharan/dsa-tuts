const instructor = {
   firstName: 'sumit',
   isInstructor: true,
   favColors: ['blue', 'green', 'red'],
};

const keys = Object.keys(instructor)
// console.log(keys)

const values = Object.entries(instructor)
// console.log(values);

const properties = instructor.hasOwnProperty('firstName')
console.log(properties)