// ACTIVITY 1: If-Else Statements

// Task1: Write a program to check if a number is positive, negative or zero and log the result to the console.
function checkSign(num) {
  if (num == 0) console.log("Number is Zero");
  else if (num > 0) console.log("Number is Positive");
  else console.log("Number is Negative");
}
checkSign(-3);

// Task2: Write a program to check if a person is eligible to vote(age >= 18) and log the result to the console.
function isEligible(age) {
  if (age <= 0) console.log("Enter valid age value");
  if (age >= 18) console.log("Person is eligible to vote");
  else console.log("Person is not eligible to vote");
}
isEligible(234);

//ACTIVITY 2: Nested If-Else Statement

// Task3: Write a program to find the largest of three numbers using nested if-else statement
function isLargest(a, b, c) {
  if (a > b) {
    if (a > c) console.log("a is largest");
    else console.log("c is largest");
  } else {
    if (b > c) console.log("b is largest");
    else console.log("c is largest");
  }
}
isLargest(30, 15, 18);

//ACTIVITY 3: Switch Case

//Task4: Write a program that uses a switch case to determine the day of the week based on number(1-7) and log the day name to the console.
function findDay(num) {
  switch (num) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Enter valid number");
      break;
  }
}
findDay(7);

//Task5: Write a program that uses a switch case to assign a grade('A','B','C','D','F') based on a score and log the grade to the console.
function grade(marks) {
  switch (true) {
    case marks <= 100 && marks > 90:
      console.log("A");
      break;
    case marks <= 90 && marks > 80:
      console.log("B");
      break;
    case marks <= 80 && marks > 70:
      console.log("C");
      break;
    case marks <= 70 && marks > 40:
      console.log("D");
      break;
    case marks <= 40:
      console.log("F");
      break;
  }
}
grade(36);

//ACTIVITY 4: Conditional(Ternary) Operator

//Task6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 66;
num % 2 === 0 ? console.log("Number is even") : console.log("Numbeer is odd");

//ACTIVITY 5: Combining Conditions

//Task7: Write a program to check if a year is leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) abd log the result to the console.
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) console.log("This is leap year");
      else console.log("This is NOT leap year");
    } else console.log("This is leap year");
  } else console.log("This is NOT leap year");
}
isLeapYear(1600);
