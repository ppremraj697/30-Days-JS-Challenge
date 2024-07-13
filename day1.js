//ACTIVITY 1: Variable Declaration

// Task1: Declare varible using 'var', assign it a number and log the value to the console.
var a = 10;
console.log(a);

// Task2: Declare varible using 'let', assign it a string and log the value to the console.
let myName = "My name is Premraj";
console.log(myName);

//ACTIVITY 2: Constant Declaration

// Task3: Declare varible using 'const', assign it a boolean value and log the value to the console.
const flag = true;
console.log(flag);

//ACTIVITY 3: Data Types

// Task4: Create varibles of different data types(number, string, boolean,object, array) and log each varibles type using 'typeof' operator.
let num = 30;
console.log(typeof num);

let str = "Hello World";
console.log(typeof str);

let bool = false;
console.log(typeof bool);

let obj = {
  firstName: "Premraj",
  lastName: "Patil",
  technicalSkills:
    "JavaScript, React.js, HTML, CSS, Tailwind CSS, C++, Java etc.",
};
console.log(typeof obj);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(typeof arr);

//ACTIVITY 4: Reassigning Varibles

// Task5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let val = 45;
console.log(val);

val = "New Value";
console.log(val);

//ACTIVITY 5: Understanding 'const'

//Task6: Try re-assigning a variable declared with const and observe the error
const constVal = "Last Task";
console.log(constVal);

//TypeError: Assignment to constant variable.
constVal = "Last Task of first day";
console.log(constVal);
