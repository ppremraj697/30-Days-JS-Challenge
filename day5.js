// ACTIVITY 1: Function Declaration

// Task1: Write a function to check if a number is even or odd and log the result to the console.
function checkNum(num) {
  if (num % 2 === 0) console.log("Number is even");
  else console.log("Number is odd");
}
checkNum(4);

//Task2: Write a function to calculate the square of a number and return the result
function square(num) {
  return num * num;
}
console.log(square(3));

//ACTIVITY 2: Function Expression

//Task3: Write a function expression to find the Maximum of two numbers and log the result to the console.
const max = function (num1, num2) {
  return num1 > num2 ? num1 : num2;
};
console.log(max(3, 2));

//Task4: Write a function to concatenate two strings and return the result
const concat = function (str1, str2) {
  return str1 + " " + str2;
};
console.log(concat("Premraj", "Patil"));

//ACTIVITY 3: Arrow Functions

//Task5: Write an arrow function to calculate the sum of two numbers and return the result
const add = (num1, num2) => {
  return num1 + num2;
};
console.log(add(5, 3));

//Task6: Write an arrow function to check if a string contains a specific character and return a boolean value
const checkChar = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) return true;
  }
  return false;
};
console.log(checkChar("Premraj", "p"));

//ACTIVITY 4: Function Parameter and Default Values

//Task7: Write a function that takes two paramters and return their product. Provide a default value for the second paramter
function product(num1, num2 = 10) {
  return num1 * num2;
}
console.log(product(2, 5));

//Task8: Write a function that takes a person's name and age and returns a geeting message. Provide a default value for age
function displayMessage(name, age = 12) {
  return `Hello ${name}, Age = ${age}, Welcome to the community`;
}
console.log(displayMessage("Premraj", 23));

//ACTIVITY 5: Higher Order Function

// Task9: Write a function and a number, and call the function that many times
function callback() {
  console.log("Callback is executed");
}

function callFunc(callback, num) {
  for (let i = 0; i < num; i++) {
    callback();
  }
}
callFunc(callback, 4);

//Task10: Write a higher order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result
function func1(num) {
  return num * num;
}

function func2(val) {
  console.log(val * 2);
}

function hof(func1, func2, val) {
  const res = func1(val);
  func2(res);
}
hof(func1, func2, 4);
