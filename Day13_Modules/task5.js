//Task5: Create a module that exports multiple constants and functions. Import and use a function from this module in a script.
const p = 13;
const q = 100;
const r = 333;

function demo() {
  console.log(
    "This is a demo function exported along with multiple other constants and imported as object"
  );
}

function demo2() {
  console.log(
    "This is a demo2 function exported along with multiple other constants and imported as object"
  );
}

module.exports = { p, q, r, demo, demo2 };
