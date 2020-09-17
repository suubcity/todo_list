import { todoArray } from "./objectFunctions";

//#region html templates
let todoNavHtml = "          <nav id=\"todoNavTop\">\r\n            <div id=\"displayByProject\">\r\n              <h4 class=\"bold\">View By Project<\/h4>\r\n              <select id=\"displayByProjectSelect\">\r\n                <option value=\"all\">All<\/option>\r\n                <option value=\"School\">School<\/option>\r\n                <option value=\"Work\">Todo List<\/option>\r\n              <\/select>\r\n            <\/div>\r\n            <h4 class=\"bold\">Sort By:<\/h4>\r\n            <h4 class=\"sortButton bold\">Due<\/h4>\r\n\r\n            <h4 class=\"sortButton\">Priority<\/h4>\r\n            <h4 class=\"sortButton\">Added<\/h4>\r\n            <h4 class=\"sortButton\">Title<\/h4>\r\n          <\/nav>";

let completedTodosNavHtml = "      <hr \/>\r\n          <nav id=\"clearCompletedTodosNav\">\r\n            <h2>Clear completed<\/h2>\r\n            <img\r\n              id=\"clearCompleteButton\"\r\n              class=\"button redGlow\"\r\n              src=\"https:\/\/res.cloudinary.com\/dli7mlkdu\/image\/upload\/v1599511969\/Icons\/005-trash_kbzvla.png\"\r\n              alt=\"Delete\"\r\n            \/>\r\n          <\/nav>";
//#endregion html template

//#region pages querySelectors

const deleteTodoPage = document.getElementById("deleteTodoPage");
const clearCompletedPage = document.getElementById("clearcompletedPage");
const notesPage = document.getElementById("notesPage");
const todoPage = document.getElementById("todoPage");
const completedTodosPage = document.getElementById("completedTodosPage");
const addEditPage = document.getElementById("addEditPage");

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
titleInput.addEventListener("input", () => toggleSaveButtonDisplay());

ADD_BUTTON.addEventListener("click", () => {
  displayAddEditPage();
  ADD_BUTTON.classList.add("hide");
  populateProjectSelections();
});

SAVE_BUTTON.addEventListener("click", () => {
  displayTodoPage();
  render();
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

//#region local functions

function toggleSaveButtonDisplay() {
  if (titleInput.value !== "") {
    SAVE_BUTTON.classList.remove("hide");
  } else {
    SAVE_BUTTON.classList.add("hide");
  }
}

let pagesArray = [
  deleteTodoPage,
  clearCompletedPage,
  notesPage,
  todoPage,
  addEditPage,
  completedTodosPage,
];

function displayPage(pageToDisplay) {
  pageToDisplay.classList.remove("hide");
  pagesArray.forEach((page) => {
    if (page !== pageToDisplay) {
      page.classList.add("hide");
    }
  });
}

//create an array of projects

function createProjectList() {
  let projectsArray = [];

  todoArray.forEach((todo) => {
    if (!projectsArray.includes(todo.project)) {
      projectsArray.push(todo.project);
    }
  });

  return projectsArray;
}
//filter it so there is only one of each

function populateProjectSelections() {
  selectProject.innerHTML = " <option value=\"\" disabled selected>\r\n                Select Existing Project\r\n              <\/option>";
  let projects = createProjectList();
  projects.forEach((project) => {
    let option = document.createElement("option");
    option.value = project;
    option.innerHTML = project;
    selectProject.appendChild(option);
  });
}

function displayDeleteTodoPage() {
  displayPage(deleteTodoPage);
}
function displayClearcompletedPage() {
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
  displayPage(addEditPage);
}

function render() {
  todoPage.innerHTML = todoNavHtml;
  checkForcompletedTodos();
  todoArray.forEach((todo) => {
    if (todo.completed === false) {
      renderTodos(todo);
    } else {
      rendercompletedTodos(todo);
    }
  });
}

//shows completed section if there are completed todos
function checkForcompletedTodos() {
  if (todoArray.some((item) => item.completed === true)) {
    completedTodosPage.classList.remove("hide");
  } else {
    completedTodosPage.classList.add("hide");
  }
}

function changeColorByPriorty(todo, priority) {
  switch (todo.priority) {
    case "low":
      priority.classList.add("lowPriority");
      break;
    case "medium":
      priority.classList.add("mediumPriority");
      break;
    case "high":
      priority.classList.add("highPriority");
      break;
  }
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

  changeColorByPriorty(todo, priority);
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

function rendercompletedTodos(todo) {
  completedTodosPage.innerHTML = completedTodosNavHtml;
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo", "completedTodo");

  const todoNav = document.createElement("nav");
  todoNav.classList.add("todoNav");

  const imgReturn = document.createElement("img");
  imgReturn.classList.add("button", "returnButton");
  imgReturn.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/a_90/v1599600615/Icons/return_hitifz.png";
  imgReturn.alt = "Return";

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
  completedTodosPage.appendChild(todoDiv);
  todoDiv.appendChild(todoNav);
  todoNav.appendChild(imgReturn);

  todoDiv.appendChild(todoInner);
  todoInner.appendChild(title);
  todoInner.appendChild(due);
  todoInner.appendChild(priority);
  todoInner.appendChild(dateAdded);
  todoInner.appendChild(project);
}

//#endregion

window.addEventListener("load", render());
