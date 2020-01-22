// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function() {
//   console.log("Click!!!!!");
// })

// cache get elements/queried selectors into variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");

var ul = document.querySelector("ul"); // to append li to it
var list_li = document.querySelectorAll("li");
var delButton = document.getElementsByClassName("delete");

// Add click listener to current li
for (var i = 0; i < list_li.length; i++) {
  list_li[i].addEventListener("click", toggleLiClass);
}

// Add click listener to current delete button
for (var i = 0; i < delButton.length; i++) {
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
  var li = document.createElement("li");
  var addButton = document.createElement("button");
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
  ul.appendChild(li);
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

// Original blocks of code:

// button.addEventListener("click", function() {
//   if (input.value.length > 0 ) {  // making sure input isn't blank, will add blank to list without this check
//     var li = document.createElement("li"); // create new li
//     li.appendChild(document.createTextNode(input.value)); // add input.value to new li
//     ul.appendChild(li);
//     input.value = ""; // clear input text box
//   }
// });

// input.addEventListener("keypress", function(event) {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
//   input.value = "";
// }
