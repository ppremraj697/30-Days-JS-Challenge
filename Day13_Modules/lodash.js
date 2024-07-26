//Task6: Install a third party module(e.g, lodash) using npm. Import and use a function from this module in a script.
const _ = require("lodash");

const array = [1, 2, 3, 4, 5, 6];

const shuffledArray = _.shuffle(array);
const shuffledArray2 = _.shuffle(array);

console.log("Original Array: ", array);
console.log("Shuffled Array: ", shuffledArray);
console.log("Shuffled Array2: ", shuffledArray2);
