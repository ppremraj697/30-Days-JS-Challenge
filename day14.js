//ACTIVITY 1: Class Definition

//Task1: Define a class 'Person' with properties 'firstName' and 'age', and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.trim().split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getGreeting() {
    console.log(
      `Hello, my name is ${this.firstName} and I am ${this.age} years old.`
    );
  }
}

//Task2: Add a method to the 'Person' class that updates the age property and logs the updated age.
Person.prototype.updateAge = function (newAge) {
  this.age = newAge;
  console.log(`The updated age is ${this.age}.`);
};

//ACTIVITY 2: Class Inheritance

//Task3: Define a class 'Student' that extends the 'Person' class. Add a property 'studentId' and a method to return the student ID. Create an instance of the 'Student' class and log the student ID.
class Student extends Person {
  constructor(firstName, lastname, age, studentId, studentCount) {
    super(firstName, lastname, age);
    this.studentId = studentId;
    Student.studentCount = studentCount;
  }

  getStudentId() {
    console.log(`Student ID of ${this.firstName} is ${this.studentId}`);
  }
}

//Task4: Override the greeting method in the 'Student' class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.getGreeting = function () {
  console.log(
    `Hello, my name is ${this.firstName} and I am ${this.age} years old. My student ID is ${this.studentId}`
  );
};

//ACTIVITY 3: Static Methods and Properties

//Task5: Add a static method to the 'Person' class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.getGenericGreeting = function () {
  console.log("These are Generic Greetings for all Persons");
};

//Task6: Add a static property to the 'Student' class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
Student.studentCount = 0;
Student.getStudentCount = function () {
  console.log(
    `Total number of students at this moment is: ${Student.studentCount}`
  );
};
Student.getStudentCount();

//ACTIVITY 4:

//Task7: Add a getter method to the 'Person' class to return the full name(assume 'firstName and 'lastName property). Create an instance and log the full name using the getter.

//Task8: Add a setter method to the 'Person' class to update the name properties ('firstName' and 'lastName'). Update the firstName using the setter and log the updated full firstName.

//ACTIVITY 5:

//Task9: Define a class 'Account' with private fields for balance 'balance' and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance; // Private field for balance

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdraw amount or insufficient balance.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

//Task10: Create an instance of the 'Account' class and test the deposit and withdraw methods, logging the balance after each operation.

//----------------------------------------------------------------------------------------------------------------------------------------

const person1 = new Person("Prem", "Patil", 22);

const student1 = new Student(
  "Prem",
  "Patil",
  22,
  20166,
  ++Student.studentCount
);

const student2 = new Student(
  "Adarsh",
  "Dhangar",
  22,
  20134,
  ++Student.studentCount
);

person1.getGreeting();

person1.updateAge(23);

student1.getStudentId();

student1.getGreeting();

Person.getGenericGreeting();

Student.getStudentCount();

console.log(person1.fullName);

person1.fullName = "Premraj Patil";
console.log("Updated name is: ", person1.fullName);

const myAccount = new Account(1000);
console.log(`Current balance: ${myAccount.getBalance()}`);
myAccount.deposit(500);
console.log(`Current balance: ${myAccount.getBalance()}`);
myAccount.withdraw(300);
console.log(`Current balance: ${myAccount.getBalance()}`);
myAccount.withdraw(1500);
console.log(`Current balance: ${myAccount.getBalance()}`);
