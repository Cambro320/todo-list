// cache get elements/queried selectors into variables
let input = document.getElementById("userInput");
let button = document.getElementById("enter");

let ol = document.querySelector("ol"); // to append li to it
let list_li = document.querySelectorAll("li");
let delButton = document.getElementsByClassName("delete");

// Add click listener to current li
for (let i = 0; i < list_li.length; i++) {
  list_li[i].addEventListener("click", toggleLiClass);
}

// Add click listener to current delete button
for (let i = 0; i < delButton.length; i++) {
  delButton[i].addEventListener("click", delParent);
}

// refactoring: using functions to abstract repetitive code blocks

//Delete li after delete button clicked
function delParent(action) {
  action.target.parentNode.remove();
}

function inputLength() {
  return input.value.length; // check if input is blank
}

function createListElement() {
  let li = document.createElement("li");
  let addButton = document.createElement("button");
  addButton.classList.add("delete");
  addButton.innerHTML = "X";
  addButton.addEventListener("click", delParent);

  li.appendChild(
    document.createTextNode(
      input.value.charAt(0).toUpperCase() + input.value.slice(1)
    )
  ); //capitalize and add delete button
  li.innerHTML = li.innerHTML + "------";
  li.appendChild(addButton);
  li.addEventListener("click", toggleLiClass);
  ol.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleLiClass() {
  this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
