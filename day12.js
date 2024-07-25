//ACTIVITY 1: Basic Error Handling with Try-Catch

//Task1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function tryCatch() {
  try {
    const a = 10;
    a = 15;
  } catch (err) {
    console.log(err);
  }
}
tryCatch();

//Task2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divideByZero() {
  try {
    const ans = 12 / 0;
    console.log(ans);
  } catch (err) {
    console.log("Catch is executed ", err);
  }
}
divideByZero();

//ACTIVITY: 2 Finally Block

//Task3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function finallyBlock() {
  try {
    console.log("Before error statement in try block");
    console.log(x);
    console.log("After error statement in try block");
  } catch (err) {
    console.log("Before error statement in catch block");
    console.log(err);
    console.log("After error statement in catch block");
  } finally {
    console.log("finally block is executed");
  }
}
finallyBlock();

//ACTIVITY 3: Custom Error Objects

//Task4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function riskyFunction() {
  const errorCondition = true;
  if (errorCondition)
    throw new CustomError("Something went wrong in riskyFunction!");

  return "Function executed successfully!";
}

try {
  const result = riskyFunction();
  console.log(result);
} catch (err) {
  if (err instanceof CustomError) {
    console.error(`Caugth a custom error: ${err.name} - ${err.message}`);
  } else {
    console.error(`Caught an unexpected error: ${err.message}`);
  }
}

//Task5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class CustomError2 extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError2";
  }
}

function checkType(str) {
  const type = typeof str;
  if (type != "string") {
    return new CustomError2("Type of the parameter is not string");
  } else {
    return "Input type is matched";
  }
}

try {
  const result = checkType(123);
  console.log(result);
} catch (err) {
  if (err instanceof CustomError2) {
    console.error(`Caugth a custom error: ${err.name} - ${err.message}`);
  } else {
    console.error(`Caught an unexpected error: ${err.message}`);
  }
}

//ACTIVITY 4: Error Handling in Promises

//Task6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function randomResolveReject() {
  return Math.floor(Math.random() * 2);
}

const randomPromise = new Promise((resolve, reject) => {
  const randomNum = randomResolveReject();

  setTimeout(() => {
    if (randomNum === 0) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected unexpectedly!");
    }
  }, 1000);
});

randomPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//Task7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function resolveReject() {
  try {
    const response = await randomPromise;
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
resolveReject();

//ACTIVITY 5: Graceful Error Handling in Fetch

//Task8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
const response = fetch("https://api.invalid-api.com");
response.then((res) => console.log(res)).catch((err) => console.error(err));

//Task9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function handleInvalidAPICall() {
  try {
    const response = await fetch("https://api.invalid-api.com");
  } catch (err) {
    console.error(err);
  }
}
handleInvalidAPICall();
