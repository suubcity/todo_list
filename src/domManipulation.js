import { todoArray } from "./objectFunctions";

//#region pages querySelectors

const deleteTodoPage = document.getElementById("deleteTodoPage");
const clearCompletedPage = document.getElementById("clearCompleatedPage");
const notesPage = document.getElementById("notesPage");
const todoPage = document.getElementById("todoPage");
const compleatedTodosPage = document.getElementById("compleatedTodosPage");
const AddEditPage = document.getElementById("addEditPage");

//#endregion

//#region buttons querySelectors
const ADD_BUTTON = document.getElementById("addButton");
const SAVE_BUTTON = document.getElementById("saveButton");
const ADD_EDIT_BACK_BUTTON = document.getElementById("addEditBackButton");
const ADD_EDIT_DELETE_BUTTON = document.getElementById("addEditDeleteButton");
const DELETE_PAGE_BACK_BUTTON = document.getElementById("deletePageBackButton");
const DELETE_PAGE_DELETE_BUTTON = document.getElementById(
  "deletePageDeleteButton"
);
//#endregion

//#region Form Inputs querySelectors
const titleInput = document.getElementById("titleInput");
const selectProject = document.getElementById("selectProject");
const addNewProjectInput = document.getElementById("addNewProjectInput");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const notesInput = document.getElementById("notesInput");

//#endregion

//#region button eventListeners
titleInput.addEventListener("input", () => checkForTitle());

ADD_BUTTON.addEventListener("click", () => {
  displayAddEditPage();
  ADD_BUTTON.classList.add("hide");
  populateProjectSelections();
});

SAVE_BUTTON.addEventListener("click", () => {
  displayTodoPage();
});

ADD_EDIT_BACK_BUTTON.addEventListener("click", () => {
  displayTodoPage();
});

ADD_EDIT_DELETE_BUTTON.addEventListener("click", () => {
  displayDeleteTodoPage();
});

DELETE_PAGE_BACK_BUTTON.addEventListener("click", () => {
  displayAddEditPage();
});

DELETE_PAGE_DELETE_BUTTON.addEventListener("click", () => {
  displayTodoPage();
});

//#endregion

let pagesArray = [
  deleteTodoPage,
  clearCompletedPage,
  notesPage,
  todoPage,
  AddEditPage,
];

//#region local functions

function checkForTitle() {
  if (titleInput.value !== "") {
    SAVE_BUTTON.classList.remove("hide");
  } else {
    SAVE_BUTTON.classList.add("hide");
  }
}

function displayPage(pageToDisplay) {
  pageToDisplay.classList.remove("hide");
  pagesArray.forEach((page) => {
    if (page !== pageToDisplay) {
      page.classList.add("hide");
    }
  });
}

function populateProjectSelections() {
  todoArray.forEach((todo) => {
    console.log(todo.project);
    let option = document.createElement("option");
    option.value = todo.project;
    option.innerHTML = todo.project;
    selectProject.appendChild(option);
  });
}

//#endregion

//#region exports

function displayDeleteTodoPage() {
  displayPage(deleteTodoPage);
}
function displayClearCompleatedPage() {
  displayPage(clearCompletedPage);
}
function displayNotesPage() {
  displayPage(notesPage);
}
function displayTodoPage() {
  displayPage(todoPage);
  ADD_BUTTON.classList.remove("hide");
}
function displayAddEditPage() {
  displayPage(AddEditPage);
}

//#endregion

function render() {
  checkForCompleatedTodos();
  todoArray.forEach((todo) => {
    if (todo.completed === false) {
      renderTodos(todo);
    } else {
      //renderCompleatedTodos();
    }
  });
}

function renderTodos(todo) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoNav = document.createElement("nav");
  todoNav.classList.add("todoNav");

  const imgTick = document.createElement("img");
  imgTick.classList.add("button", "doneButton");
  imgTick.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511973/Icons/035-check-1_w6twiu.png";
  imgTick.alt = "Tick";

  const imgEdit = document.createElement("img");
  imgEdit.classList.add("button", "editButton");
  imgEdit.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511971/Icons/020-edit_lwkmwt.png";
  imgEdit.alt = "Edit";

  const imgInfo = document.createElement("img");
  imgInfo.classList.add("button", "infoButton");
  imgInfo.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599514254/Icons/info_q23uvm.png";
  imgInfo.alt = "Information";

  const todoInner = document.createElement("div");
  todoInner.classList.add("todoInner");

  const title = document.createElement("h2");
  title.classList.add("todoInfo", "title");
  title.textContent = todo.title;

  const due = document.createElement("h5");
  due.classList.add("todoInfo", "due");
  due.textContent = `Due Date: ${todo.dueDate}`;

  const priority = document.createElement("h5");
  priority.classList.add("todoInfo", "priority");
  priority.textContent = `Priority: ${todo.priority}`;

  const dateAdded = document.createElement("h5");
  dateAdded.classList.add("todoInfo", "dateAdded");
  dateAdded.textContent = `Date added: ${todo.dateAdded}`;

  const project = document.createElement("h5");
  project.classList.add("todoInfo", "project");
  project.textContent = `Project: ${todo.project}`;

  //appending
  todoPage.appendChild(todoDiv);
  todoDiv.appendChild(todoNav);
  todoNav.appendChild(imgTick);
  todoNav.appendChild(imgEdit);
  todoNav.appendChild(imgInfo);

  todoDiv.appendChild(todoInner);
  todoInner.appendChild(title);
  todoInner.appendChild(due);
  todoInner.appendChild(priority);
  todoInner.appendChild(dateAdded);
  todoInner.appendChild(project);
}

function checkForCompleatedTodos() {
  if (todoArray.some((item) => item.completed === true)) {
    compleatedTodosPage.classList.remove("hide");
  } else {
    compleatedTodosPage.classList.add("hide");
  }
}

checkForCompleatedTodos();
//todo edit this function so it builds compleated todos
function renderCompleatedTodos(todo) {
  
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const todoNav = document.createElement("nav");
  todoNav.classList.add("todoNav");

  const imgTick = document.createElement("img");
  imgTick.classList.add("button", "doneButton");
  imgTick.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511973/Icons/035-check-1_w6twiu.png";
  imgTick.alt = "Tick";

  const imgEdit = document.createElement("img");
  imgEdit.classList.add("button", "editButton");
  imgEdit.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511971/Icons/020-edit_lwkmwt.png";
  imgEdit.alt = "Edit";

  const imgInfo = document.createElement("img");
  imgInfo.classList.add("button", "infoButton");
  imgInfo.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599514254/Icons/info_q23uvm.png";
  imgInfo.alt = "Information";

  const todoInner = document.createElement("div");
  todoInner.classList.add("todoInner");

  const title = document.createElement("h2");
  title.classList.add("todoInfo", "title");
  title.textContent = todo.title;

  const due = document.createElement("h5");
  due.classList.add("todoInfo", "due");
  due.textContent = `Due Date: ${todo.dueDate}`;

  const priority = document.createElement("h5");
  priority.classList.add("todoInfo", "priority");
  priority.textContent = `Priority: ${todo.priority}`;

  const dateAdded = document.createElement("h5");
  dateAdded.classList.add("todoInfo", "dateAdded");
  dateAdded.textContent = `Date added: ${todo.dateAdded}`;

  const project = document.createElement("h5");
  project.classList.add("todoInfo", "project");
  project.textContent = `Project: ${todo.project}`;

  //appending
  todoPage.appendChild(todoDiv);
  todoDiv.appendChild(todoNav);
  todoNav.appendChild(imgTick);
  todoNav.appendChild(imgEdit);
  todoNav.appendChild(imgInfo);

  todoDiv.appendChild(todoInner);
  todoInner.appendChild(title);
  todoInner.appendChild(due);
  todoInner.appendChild(priority);
  todoInner.appendChild(dateAdded);
  todoInner.appendChild(project);
}

render();
