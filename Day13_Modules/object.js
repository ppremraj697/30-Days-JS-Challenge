//Task2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const myObj = {
  firstName: "Premraj",
  lastName: "Patil",
  education: "Bachelors in Engineering",
  college: "DYPIEMR, Akurdi",
  city: "Pune, MH",
  toString: function () {
    console.log(
      `This object represents details of ${this.firstName} ${this.lastName}`
    );
  },
};

module.exports = { myObj };
