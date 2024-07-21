# New Things I Learned During This Challenge

1. In Node.js environment, how to print something in the same line since console.log() add new line character by default.  
   Argument must be of type string or an instance of Buffer or Uint8Array

```bash
process.stdout.write()
```

2. Enhanced Object Literals  
   a. Property Shorthand  
   b. Method Definitions  
   c. Computed Property Names  
   d. Setting Prototypes Directly  
   e. Using super in Methods  
   f. Symbol Property Names  
   g. Spread Operator in Object Literals  
   h. Object Destructuring with Defaults

```bash
let name = 'Alice';
let age = 25;
let prop = 'greet';

let person = {
  name,
  age,
  [prop]() {
    console.log('Hello, my name is ' + this.name);
  }
};

console.log(person); #{ name: 'Alice', age: 25, greet: [Function: greet] }
person.greet(); #Hello, my name is Alice
```

3. DOM Manipulation
   a. New ways to create and append child onto DOM (Activity 2)
   b. Removing Elements from DOM (Activity 3)
   c. Change attribute of HTML elements (Activity 4)
   d. Add and remove a CSS class to/from an HTML element (Activity 4)
