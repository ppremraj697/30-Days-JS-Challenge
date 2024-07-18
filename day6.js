// ACTIVITY 1: Array Creation and Access

//Task1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task2: Access the first and last element of the array and log them to the console.
console.log(arr[0], arr[arr.length - 1]);

//ACTIVITY 2: Array Methods(Basics)

//Task3: Use the 'push' methods to add a new number to the end of the array and log the updated array
arr.push(6);
console.log(arr);

//Task4: Use the 'pop' methods to remove last element from the array and log the updated array
arr.pop();
console.log(arr);

//Task5: Use the 'shift' methods to remove first element from the array and log the updated array
arr.shift();
console.log(arr);

//Task6: Use the 'unshift' methods to add a new number to the beginning of the array and log the updated array
arr.unshift(0);
console.log(arr);

//ACTIVITY 3: Array Methods (Intermediate)

//Task7: Use the 'map' method to create a new array where each number is doubled and log the new array.
const doubledArr = arr.map((item) => (item *= 2));
console.log(doubledArr);

//Task8: Use the 'filter' method to create a new array with only even numbers and log the new array.
const evenItems = arr.filter((item) => item % 2 === 0);
console.log(evenItems);

//Task9: Use the 'reduce' method to calculate the sum of all numbers in the array and log the result.
const arrSum = arr.reduce((acc, curr) => (acc += curr), 0);
console.log(arrSum);

//ACTIVITY 4: Array Iteration

//Task10: Use a 'for' loop to iterate over the array and log each element to the console
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Task11: Use the 'forEach' method to iterate over the array and log each element to the console.
arr.forEach((item) => console.log(item));

//ACTIVITY 5: Multi-dimentional Arrays

//Task12: Create a two-dimentional array(matrix) and log the entire array to the console.
const multiDimArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < multiDimArr.length; i++) {
  for (let j = 0; j < multiDimArr[0].length; j++) {
    process.stdout.write(`${multiDimArr[i][j]} `);
  }
  console.log();
}

//Task13: Access and log a specific element from the two-dimentional array --> Accessing 6
console.log(multiDimArr[1][2]);
