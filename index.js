
// a. Create an array named “myStudent”
let myStudent = [
  "John Doe",
  "Jane Doe",
  "Alice Smith",
  "Bob Johnson",
  "Eve Brown",
  "Mike Davis",
  "Emily Taylor",
  "David White",
  "Sophia Lee",
  "Oliver Martin",
];

// b. In the array, enter strings of name which should be 10 in number
console.log("My Students:");
console.log(myStudent);

// c. Create a for loop which runs to console each item in the array
for (let i = 0; i < myStudent.length; i++) {
  console.log(`Student ${i + 1}: ${myStudent[i]}`);
}

// d. Create an object with property (name: string, age: number, married: Boolean, location: undefined)
let studentObject = {
  name: "John Doe",
  age: 25,
  married: false,
  location: "New York",
};

// e. Console each property in the object (hint: making use of dot notation)
console.log("Student Object:");
console.log(`Name: ${studentObject.name}`);
console.log(`Age: ${studentObject.age}`);
console.log(`Married: ${studentObject.married}`);
console.log(`Location: ${studentObject.location}`);
