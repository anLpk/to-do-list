// console.log("Hello from inside");
const input = document.getElementById("inputText");
const display = document.getElementById("display");
const displayDone = document.getElementById("display-done");
const button = document.getElementById("addButton");
const deleteAll = document.getElementById("delete-icon");

const createEditBtn = () => {
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit";
  editButton.addEventListener("click", (e) => {
    const btn = e.target;
    const input = btn.parentElement.querySelector("input");
    input.focus();
    const previousVal = input.value;
    input.addEventListener("keyup", (evt) => {
      if (evt.keyCode === 13) {
        if (input.value.trim() === "") {
          input.value = previousVal;
        }
        input.disabled = true;
        btn.disabled = false;
      }
    });
    input.addEventListener("blur", () => {
      input.disabled = true;
      btn.disabled = false;
    });
    input.disabled = false;
    btn.disabled = true;
  });

  return editButton;
};

const createRemoveBtn = () => {
  const removeBtn = document.createElement("input");
  removeBtn.setAttribute("type", "button");
  removeBtn.setAttribute("value", "X");
  removeBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
  return removeBtn;
};

const createItem = () => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input value="${input.value}" disabled=true>`;
  display.appendChild(listItem);
  input.value = "";

  const editBtn = createEditBtn();
  listItem.appendChild(editBtn);
  listItem.appendChild(createRemoveBtn());

  listItem.addEventListener("dblclick", (e) => {
    displayDone.appendChild(listItem);
    listItem.style.backgroundColor = "#54e346";
    listItem.style.textDecoration = "line-through";
    editBtn.style.display = "none";
  });
};

//Make sure user fill the input
const addAfterClick = () => {
  if (input.value.length > 0) {
    createItem();
  } else {
    alert("Write something mate!");
  }
};

//List item can be added with "Enter" as well
const addWithEnter = (event) => {
  if (event.keyCode === 13) {
    addAfterClick();
  }
};

// Remove all with user approve
const removeAll = (event) => {
  const answer = prompt(`Type "Delete All" If you are that sure!`);
  if (answer === "Delete All") {
    display.innerHTML = "";
    displayDone.innerHTML = "";
  } else {
    alert("Try One More Time");
  }
};

//Event Listeners
button.addEventListener("click", addAfterClick);
input.addEventListener("keyup", addWithEnter);
deleteAll.addEventListener("click", removeAll);

// // Create and Remove list item
// function createItem() {
//   let listItem = document.createElement("li");
//   listItem.className = "create";
//   listItem.appendChild(document.createTextNode(input.value));
//   listItem.innerHTML = `<span>${listItem.textContent}</span>`;
//   display.appendChild(listItem);
//   input.value = "";

//   let editButton = document.createElement("button");
//   editButton.innerText = "edit";
//   editButton.className = "edit";
//   editButton.addEventListener("click", (e) => {
//     let editItem = e.currentTarget.parentElement.querySelector("span");
//     let editInput = document.createElement("input");
//     editInput.setAttribute("type", "text");
//     editInput.setAttribute("value", `${editItem.textContent}`);
//     editInput.setAttribute("id", "editInput");
//     editItem.replaceWith(editInput);

//     editButton.innerText = "complete";
//     editButton.addEventListener("click", (e) => {
//       editButton.innerText = "edit";
//       editItem.removeAttribute("input");
//       console.log(editItem);
//     });
//   });

//   let removeTask = document.createElement("input");
//   removeTask.setAttribute("type", "button");
//   removeTask.setAttribute("value", "X");
//   removeTask.setAttribute("id", "removeButton");
//   removeTask.addEventListener("click", (e) => {
//     listItem.parentNode.removeChild(listItem);
//   });
//   listItem.appendChild(editButton);
//   listItem.appendChild(removeTask);
//   listItem.addEventListener("dblclick", (e) => {
//     displayDone.appendChild(listItem);
//     listItem.style.backgroundColor = "#54e346";
//     listItem.style.textDecoration = "line-through";
//     editButton.style.display = "none";
//   });
// }
