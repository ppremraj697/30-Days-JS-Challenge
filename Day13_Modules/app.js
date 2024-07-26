const { add } = require("./addNumbers");
const { myObj } = require("./object");
const { subtract, multiply, divide } = require("./mathOperations");
const demoFunction = require("./defaultExport");
const task5Module = require("./task5");

//Task1
const num1 = 5;
const num2 = 7;
const result = add(num1, num2);
console.log(`The sum of ${num1} and ${num2} is ${result}`);

//Task2
console.log(myObj);

//Task3
console.log(subtract(10, 5), " ", multiply(10, 2), " ", divide(14, 7));

//Task4
demoFunction();

//Task5
console.log(task5Module.p, task5Module.q, task5Module.r);
task5Module.demo();
task5Module.demo2();

//Task6
