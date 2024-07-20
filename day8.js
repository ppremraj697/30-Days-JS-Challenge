// ACTIVITY 1: Template Literals

//Task1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let myName = "Premraj";
let myAge = 23;
console.log(`My name is ${myName} and I'm ${myAge} years old`);

//Task2: Create a multi-line string using template literals and log it to the console.
console.log(
  `My name is Premraj \nI have done my bachelor's from DYPIEMR, Akurdi in Computer Science and Engineering \nI am 23 years old`
);

//ACTIVITY 2: Destructuring

//Task3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr = [1, 2, 3, 4, 5, 6, 7];
const [a, b] = arr;
console.log(a, b);

//Task4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "You don't know JS",
  author: "Kyle Simpson",
  year: 2020,
};

const { author, title } = book;
console.log(title, author);

//ACTIVITY 3: Spread and Rest Operators

//Task5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const arr1 = [1, 3, 5, 7, 9];
const newArr = [...arr1, 11, 13, 15, 17, 19];
console.log(newArr);

//Task6: Use the rest operator in a function to accept an arbitary number of arguments,sum them, and return the result.
function sum(...param) {
  const ans = param.reduce((acc, curr) => (acc += curr), 0);
  return ans;
}
console.log(sum(1, 2, 3, 4, 5));

//ACTIVITY 4: Default Parameter

//Task7: Write a function that takes two paramters and returns their product, with second paramter having a default value of 1. Log the result of calling this function with and without the second paramter.
function prod(a, b = 1) {
  return a * b;
}
console.log(prod(5, 2));
console.log(prod(5));

//ACTIVITY 5: Enhanced Object Literals

//Task8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
//Task9: Create an object with computed property names based on variables and log the object to the console.
let name = "Premraj";
let age = 23;
let prop = "myBook";

let myDetails = {
  //Property Shorthand
  name,
  age,
  //Method Definition
  greet() {
    console.log("Good Morning Everybody!");
  },
  //Computed Property Name
  [prop]() {
    console.log("I am going to author My own biography very soon");
  },
};
console.log(myDetails);
