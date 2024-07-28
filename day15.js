// ACTIVITY 1: Understanding Closures

//Task1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
  let a = 10;
  [];
  return function () {
    console.log("Value of a is:", a);
  };
}
const inner = outer();
inner();

//Task2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function counter() {
  let a = 0;
  return {
    get() {
      return a;
    },
    increment() {
      a += 1;
      console.log(a);
    },
    decrement() {
      a -= 1;
      console.log(a);
    },
  };
}
const count = counter();
count.increment();
console.log(count.get());
count.decrement();

//ACTIVITY 2: Practical Closure

//Task3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment with each call.
function randomID() {
  let id = 0;
  return function () {
    return (id += 1);
  };
}
const idClosure = randomID();
console.log(idClosure());
console.log(idClosure());
console.log(idClosure());

//Task4: Create a closure that captures a users's name and returns a function that greets the user by name.
function greet(name) {
  return function () {
    console.log(`Hello ${name}, Good Morning`);
  };
}
const greetPremraj = greet("Premraj");
greetPremraj();

//ACTIVITY 3: Closures in Loops

//Task5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(function () {
    console.log(i);
  });
}
arr[2]();

//ACTIVITY 4: Module Pattern

//Task6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function itemManager() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      return (items = items.filter((i) => i !== item));
    },
    listItem: function () {
      return [...items];
    },
  };
}

const itemList1 = itemManager();
itemList1.addItem("Range Rover");
itemList1.addItem("Jeep");
itemList1.addItem("Thar");
console.log(itemList1.listItem());
console.log(itemList1.removeItem("Jeep"));

//ACTIVITY 5: Memoization

//Task7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoAddition() {
  let cache = {};
  return function (value) {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value];
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
}

const addition = memoAddition();
console.log(addition(20));
console.log(addition(20));

//Task8: Create a memoized version of a function that calculates the factorial of a number
function memoizedFactorial() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Fetching from cache");
      return num;
    } else {
      console.log("Calculating result");
      let res = 1;
      for (let i = 1; i <= num; i++) {
        res *= i;
      }
      cache[num] = res;
      return res;
    }
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(5));
