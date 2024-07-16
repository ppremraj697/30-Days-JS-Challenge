// ACTIVITY 1: For Loop

// Task1: Write a program to print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task2: Write a program to print the multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

//ACTIVITY 2: While Loop

// Task3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop
let sum = 0,
  i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(sum);

//Task4: Write a program to print numbers from 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

//ACTIVITY 3: Do...While Loop

// Task5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

//Task6 : Write a program to calculate the factorial of a number using a do...while loop.
function factorial(num) {
  if (num <= 1) return num;
  let fact0 = 0;
  let fact1 = 1;
  let nextFact;
  for (let i = 2; i <= num; i++) {
    nextFact = fact0 + fact1;
    fact0 = fact1;
    fact1 = nextFact;
  }
  console.log(nextFact);
}
factorial(8);

//ACTIVITY 4: Nested Loop

//Task7: Write a program to print a pattern using nested for loops
function printPattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
printPattern(5);

//ACTIVITY 5: Loop Control Statements

// Task8: Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

//Task9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the 'break' statement.
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log(i);
}
