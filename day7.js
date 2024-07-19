//ACTIVITY 1: object Creation and Access

//Task1: Create an object representing a book with properties like title, author and year and log the object to the console.
const myBook = {
  title: "You don't know JS",
  author: "Kyle Simpson",
  year: 2020,
};
console.log(myBook);

//Task2: Access and log the title and author properties of the book object.
console.log(myBook.title + ": " + myBook.author);

//ACTIVITY 2: Object Methods

//Task3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
myBook.toString = function () {
  return `Book Title: ${this.title} and Book Author: ${this.author}`;
};
console.log(myBook.toString());

//Task4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.
myBook.newEdition = function (updatedVersion) {
  this.year = updatedVersion;
};
myBook.newEdition(2022);
console.log(myBook);

//ACTIVITY 3: Nested Objects

//Task5: Create a nested object representing a library with properties like name and books(an array of book objects), and log the library object to the console.
let library = {
  name: "My Ancient Library",
  books: [
    {
      title: "Ramayana",
      author: "Maharshi Valmiki",
      year: "8000 BCE",
    },
    {
      title: "Mahabharat",
      author: "Ved Vyasa",
      year: "5000 BCE",
    },
    {
      title: "Premraj's Autobiography",
      author: "Premraj Patil",
      year: "2040",
    },
  ],
};
console.log(library);

//Task6: Access and log the name of the library and the titles of all the books in the library
console.log(library.name);
library.books.forEach((item) => console.log(item.title));

//ACTIVITY 4: The 'this' keyword

//Task7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year and log the result of calling this method.
console.log(myBook.toString());

//ACTIVITY 5: Object Iteration

//Task8: Use a for...in loop to iterate over the properties of the book object and log each property and its value
for (prop in myBook) {
  console.log(prop, " ", myBook[prop]);
}

//Task9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(myBook), Object.values(myBook));
