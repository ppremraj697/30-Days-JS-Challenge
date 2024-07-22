//ACTIVITY 1: Basic Event Handling

//Task1: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById("btn1").addEventListener("click", () => {
  document.getElementById("para1").innerText =
    "This is the updated text content changed after clicking the button below";
});

//Task2: Add a double-click event listener to an image that toggles its visibility.
//The toggle method of classList adds the specified class ("hidden" in this case) if it is not already present, and removes it if it is each time the 'toggle' method is called.
const imageDiv = document.getElementById("task2");
imageDiv.addEventListener("dblclick", () => {
  document.getElementById("image").classList.toggle("hidden");
});

//ACTIVITY 2: Mouse Events

//Task3: Add a mouseover event listener to an element that changes its background color.
document.getElementById("task3").addEventListener("mouseover", () => {
  document.getElementById("task3").style.backgroundColor = "gray";
});

//Task4: Add a mouseout event listener to an element that resets its background color.
document.getElementById("task3").addEventListener("mouseout", () => {
  document.getElementById("task3").style.backgroundColor = "red";
});

//ACTIVITY 3: Keyboard Events

//Task5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById("input");
input.addEventListener("keydown", (event) => {
  console.log("Key pressed: ", event.key);
});

//Task6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const output = document.getElementById("output");
console.log(output.textContent);
document.getElementById("input").addEventListener("keyup", () => {
  output.textContent = input.value;
});

//ACTIVITY 4: Form Events

//Task7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

//Task8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectElement = document.getElementById("mySelect");
const outputParagraph = document.getElementById("selectedValue");

selectElement.addEventListener("change", () => {
  const selectedValue = selectElement.value;
  outputParagraph.textContent = `Selected value: ${selectedValue}`;
});

//ACTIVITY 5: Event Delegation

//Task9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.getElementById("myList");

list.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log(`Clicked item text: ${event.target.textContent}`);
  }
});

//Task10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const dynamicList = document.getElementById("dynamicList");
const addItemButton = document.getElementById("addItemButton");

let itemCount = 1;

dynamicList.addEventListener("click", function (event) {
  if (event.target && event.target.nodeName === "LI") {
    console.log(`Clicked item text: ${event.target.textContent}`);
  }
});

addItemButton.addEventListener("click", function () {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemCount}`;
  dynamicList.appendChild(newItem);
});
