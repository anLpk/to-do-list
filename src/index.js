// console.log("Hello from inside");
const input = document.getElementById("inputText");
const display = document.getElementById("display");
const displayDone = document.getElementById("display-done");
const button = document.getElementById("addButton");
const deleteAll = document.getElementById("delete-icon");
// const ul = document.getElementById("display");

// Create and Remove list item
function createItem() {
  let listItem = document.createElement("li");
  listItem.className = "create";
  listItem.appendChild(document.createTextNode(input.value));
  display.appendChild(listItem);
  input.value = "";

  let editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit";
  editButton.addEventListener("click", (e) => {
    // console.log("you are in right path");
  });

  let removeTask = document.createElement("input");
  removeTask.setAttribute("type", "button");
  removeTask.setAttribute("value", "X");
  removeTask.setAttribute("id", "removeButton");
  removeTask.addEventListener("click", (e) => {
    listItem.parentNode.removeChild(listItem);
  });
  listItem.appendChild(editButton);
  listItem.appendChild(removeTask);
  listItem.addEventListener("dblclick", (e) => {
    displayDone.appendChild(listItem);
    listItem.style.backgroundColor = "#54e346";
    listItem.style.textDecoration = "line-through";
  });
}

//Make sure user fill the input
function addAfterClick() {
  if (input.value.length > 0) {
    createItem();
  } else {
    alert("Write something mate!");
  }
}

//List item can be added with "Enter" as well
function addWithEnter(event) {
  if (event.keyCode === 13) {
    addAfterClick();
  }
}

// Remove all with user approve
function removeAll(event) {
  let answer = prompt(`Type "Delete All" If you are that sure!`);
  if (answer === "Delete All") {
    display.style.display = "none";
    location.reload();
  } else {
    alert("Try One More Time");
  }
}

//Event Listeners
button.addEventListener("click", addAfterClick);
input.addEventListener("keyup", addWithEnter);
deleteAll.addEventListener("click", removeAll);
