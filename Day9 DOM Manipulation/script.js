// ACTIVITY 1: Selecting and Manipulating Elements

//Task1: Select an HTML element by its ID and change its text content
const changeText = document.getElementById("heading");
changeText.textContent = "Day 9: " + changeText.textContent;

//Task2: Select an HTML element by its class and change its background color
const changeColor = document.getElementsByClassName("task2");
changeColor[0].style.backgroundColor = "orange";

//ACTIVITY 2: Creating and Appending Elements

//Task3: Create a new 'div' element with some text content and append it to the body
const activity2 = document.createElement("div");
activity2.id = "activity2";
activity2.innerHTML = "<h2>This element is created dynamically</h2>";
const activity3 = document.getElementById("activity3");
document.body.insertBefore(activity2, activity3);

//Task4: Create a new 'li' element and add it to an existing 'ul' list.
const ul = document.createElement("ul");
ul.id = "list";
activity2.appendChild(ul);
const newListItem = document.createElement("li");
newListItem.innerText = "This 'li' tag is generated dynamically";
list.appendChild(newListItem);

//ACTIVITY 3: Removing Elements

//Task5: Select an HTML element and remove it from the DOM.
const elemToRemove = document.getElementById("randomP1");
elemToRemove.remove();

//Task6: Remove the last child of a specific HTML element
const parent = document.getElementById("activity3");
parent.removeChild(parent.lastElementChild);

//ACTIVITY 4: Modifying Attributes and Classes

//Task7: Select an HTML element and change one of its attributes
const para = document.getElementById("oldId");
para.id = "newId";

//Task8: Add and remove a CSS class to/from an HTML element
const test = document.getElementById("test");
const test2 = document.getElementById("test2");
test.classList.add("customCSS");
test2.classList.add("customCSS2");
test2.classList.remove("customCSS2");

//ACTIVITY 5: Event Handling

//Task9: Add a click event listener to a button that changes the text content of a paragraph
const para1 = document.getElementById("clickEvent");
para1.addEventListener("click", () => {
  para1.innerText = "This is updated text";
});

//Task10: Add a mouseover event listener to an element that changes its border color
const randomDiv = document.getElementById("randomDiv");
randomDiv.style.border = "solid red 10px";
randomDiv.addEventListener("mouseover", () => {
  randomDiv.style.borderColor = "black";
});
