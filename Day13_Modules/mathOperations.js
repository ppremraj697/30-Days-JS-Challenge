//Task3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

module.exports = { subtract, multiply, divide };
