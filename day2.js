// ACTIVITY 1: Arithmetic Operator

function operation(a, b, op) {
  switch ((a, b, op)) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
    case "%":
      console.log(a % b);
      break;
    default:
      console.log("Enter valid arithmetic operator");
  }
}

//Task1 to Task4: Write a program to add, subtract, multiply and divide two numbers and log the result to the console.
operation(14, 3, "+");
operation(14, 3, "-");
operation(14, 3, "*");
operation(14, 3, "/");

//Task5: Write a program to find remainder when one number is divided by another and log the result to the console.
operation(14, 3, "%");

//ACTIVITY 2: Assignment Operators

// Task6 & Task7: Use the '+=' & '-=' operator to add & subtract a number from a variable and log the result to the console.
let a = 10;
console.log((a += 20));
console.log((a -= 5));

//ACTIVITY 3: Comparison Operator

// Task8 to Task10: Write a program to compare two numbers using > , <, >=, <=, ==, === and log the result to the console.
console.log(14 < 16);
console.log(14 > 14);
console.log(14 <= 14);
console.log(14 >= 54);
console.log("5" == 5);
console.log("5" === 5);

//ACTIVITY 4: Logical Operator

//Task11 to Task13: Write a program that uses the &&, ||, ! operator and log the result to the console.
if (14 > 1 && 13 < 34) console.log("Both conditions are true");
if (45 < 33 || 56 > 23) console.log("One or both given conditions are true");
console.log(!true);

//ACTIVITY 5: Ternary Operator

//Task14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let d = 34;
d > 0 ? console.log("Number is Positive") : console.log("Number is Negative");
