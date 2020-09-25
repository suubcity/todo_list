//todo set up delete button to delete edited todo
//todo display the save and delete buttons

import {
  clearCompletedTodos,
  sortArray,
  todoArray,
  saveTodo,
  deleteTodo,
} from "./objectFunctions";
import { format, parseISO } from "date-fns";

//#region html templates
let todoNavHtml =
  '          <nav id="todoNavTop">\r\n        <h4 class="bold">Sort By:</h4>\r\n            <h4 data-sort="dueDate" class="sortButton">Due</h4>\r\n\r\n            <h4 data-sort="priority" class="sortButton">Priority</h4>\r\n            <h4 data-sort="dateAdded" class="sortButton">Added</h4>\r\n            <h4 data-sort="title" class="sortButton">Title</h4>\r\n          </nav>';

let completedTodosNavHtml =
  '      <hr />\r\n          <nav id="clearCompletedTodosNav">\r\n            <h2>Clear completed</h2>\r\n            <img\r\n              id="clearCompleteButton"\r\n              class="button redGlow"\r\n              src="https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511969/Icons/005-trash_kbzvla.png"\r\n              alt="Delete"\r\n            />\r\n          </nav>';
//#endregion html template

//#region pages querySelectors
const deleteTodoPage = document.getElementById("deleteTodoPage");
const notesPage = document.getElementById("notesPage");
const todoPage = document.getElementById("todoPage");
const completedTodosPage = document.getElementById("completedTodosPage");
const addEditPage = document.getElementById("addEditPage");

//#endregion

//#region page display functions
let pagesArray = [
  deleteTodoPage,
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

function displayDeleteTodoPage() {
  displayPage(deleteTodoPage);
  addButton.classList.add("hide");
}

function displayNotesPage() {
  displayPage(notesPage);
  addButton.classList.add("hide");
}
function displayTodoPage() {
  displayPage(todoPage);
  addButton.classList.remove("hide");
  saveButton.classList.add("hide");
  addEditDeleteButton.classList.add("hide");
  render();
}
function displayAddEditPage() {
  displayPage(addEditPage);
  addButton.classList.add("hide");
}

//#endregion display functions

//#region render section

function render() {
  todoPage.innerHTML = todoNavHtml;
  checkForcompletedTodos();
  todoArray.forEach((todo, index) => {
    if (todo.completed === false) {
      renderTodos(todo, index);
    } else {
      rendercompletedTodos(todo, index);
    }
  });
  updateAllTodoPageQuerySelectorsAndListeners();
}

function renderTodos(todo, index) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.dataset.index = index;

  const todoNav = document.createElement("nav");
  todoNav.classList.add("todoNav");

  const imgTick = document.createElement("img");
  imgTick.classList.add("button", "doneUnDoneButtons");
  imgTick.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511973/Icons/035-check-1_w6twiu.png";
  imgTick.alt = "Tick";
  imgTick.dataset.index = index;

  const imgEdit = document.createElement("img");
  imgEdit.classList.add("button", "editButtons");
  imgEdit.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511971/Icons/020-edit_lwkmwt.png";
  imgEdit.alt = "Edit";
  imgEdit.dataset.index = index;

  const imgNotes = document.createElement("img");
  imgNotes.classList.add("button", "notesButton");
  imgNotes.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/v1599514254/Icons/info_q23uvm.png";
  imgNotes.alt = "notes";
  imgNotes.dataset.index = index;

  const todoInner = document.createElement("div");
  todoInner.classList.add("todoInner");

  const title = document.createElement("h2");
  title.classList.add("todoInfo", "title");
  title.textContent = todo.title;

  const due = document.createElement("h5");
  due.classList.add("todoInfo", "due");
  changeColorByDate(todo, due);

  if (checkForEmpty(todo.dueDate)) {
    due.classList.add("hide");
  } else if (dateInPast(todo.dueDate)) {
    due.textContent = "OVERDUE";
  } else {
    due.textContent = `Due: ${format(
      parseISO(todo.dueDate),
      // todo.dueDate,
      "eeee do-MMM-yyyy"
    )}`;
  }

  const priority = document.createElement("h5");
  priority.classList.add("todoInfo", "priority");
  if (checkForEmpty(todo.priority)) {
    priority.classList.add("hide");
  } else {
    changeColorByPriorty(todo, priority);
    priority.textContent = `Priority: ${todo.priority}`;
  }

  const dateAdded = document.createElement("h5");
  dateAdded.classList.add("todoInfo", "dateAdded");
  dateAdded.textContent = `Added: ${format(
    // parseISO(todo.dateAdded),
    todo.dateAdded,
    "eeee do-MMM-yyyy"
  )}`;

  const project = document.createElement("h5");
  project.classList.add("todoInfo", "project");
  if (todo.project === "None" || checkForEmpty(todo.project)) {
    project.classList.add("hide");
  } else {
    project.textContent = `Project: ${todo.project}`;
  }

  //appending
  todoPage.appendChild(todoDiv);
  todoDiv.appendChild(todoNav);
  todoNav.appendChild(imgTick);
  todoNav.appendChild(imgEdit);
  todoNav.appendChild(imgNotes);

  todoDiv.appendChild(todoInner);
  todoInner.appendChild(title);
  todoInner.appendChild(due);
  todoInner.appendChild(priority);
  todoInner.appendChild(dateAdded);
  todoInner.appendChild(project);
}

function rendercompletedTodos(todo, index) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo", "completedTodo");
  todoDiv.dataset.index = index;

  const todoNav = document.createElement("nav");
  todoNav.classList.add("todoNav");

  const imgBack = document.createElement("img");
  imgBack.classList.add("button", "doneUnDoneButtons");
  imgBack.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/a_90/v1599600615/Icons/return_hitifz.png";
  imgBack.alt = "Back button";
  imgBack.dataset.index = index;

  const todoInner = document.createElement("div");
  todoInner.classList.add("todoInner");

  const title = document.createElement("h2");
  title.classList.add("todoInfo", "title");
  title.textContent = todo.title;

  const due = document.createElement("h5");
  due.classList.add("todoInfo", "due");
  if (checkForEmpty(todo.dueDate)) {
    due.classList.add("hide");
  } else {
    due.textContent = `Due: ${format(
      parseISO(todo.dueDate),

      "eeee do-MMM-yyyy"
    )}`;
  }

  const priority = document.createElement("h5");
  priority.classList.add("todoInfo", "priority");
  if (todo.project === "None" || checkForEmpty(todo.project)) {
    priority.classList.add("hide");
  } else {
    priority.textContent = `Priority: ${todo.priority}`;
  }

  const dateAdded = document.createElement("h5");
  dateAdded.classList.add("todoInfo", "dateAdded");
  dateAdded.textContent = `Added: ${format(
    todo.dateAdded,
    "eeee do-MMM-yyyy"
  )}`;

  const project = document.createElement("h5");
  project.classList.add("todoInfo", "project");
  if (checkForEmpty(todo.project)) {
    project.classList.add("hide");
  } else {
    project.textContent = `Project: ${todo.project}`;
  }

  //appending
  completedTodosPage.appendChild(todoDiv);
  todoDiv.appendChild(todoNav);
  todoNav.appendChild(imgBack);

  todoDiv.appendChild(todoInner);
  todoInner.appendChild(title);
  todoInner.appendChild(due);
  todoInner.appendChild(priority);
  todoInner.appendChild(dateAdded);
  todoInner.appendChild(project);
}

//shows completed section if there are completed todos
function checkForcompletedTodos() {
  if (todoArray.some((item) => item.completed === true)) {
    completedTodosPage.classList.remove("hide");
    renderCompletedNavSection();
  } else {
    completedTodosPage.classList.add("hide");
  }
}

function renderCompletedNavSection() {
  completedTodosPage.innerHTML = completedTodosNavHtml;
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

function changeColorByDate(todo, due) {
  let date = new Date();
  //due date is within two days
  if (parseISO(todo.dueDate) - date <= 172800000) {
    due.classList.add("highPriority");
    //due date within 1 week
  } else if (parseISO(todo.dueDate) - date <= 604800000) {
    due.classList.add("mediumPriority");
  } else {
    due.classList.add("lowPriority");
  }
}

function dateInPast(date) {
  if (parseISO(date).setHours(0, 0, 0, 0) <= new Date().setHours(0, 0, 0, 0)) {
    return true;
  }
  return false;
}

function checkForEmpty(value) {
  if (value === "") {
    return true;
  }
}

//#endregion

//#region to-do Page

const addButton = document.getElementById("addButton");

let clearCompleteButton;
function getClearCompleteButtonDomElement() {
  clearCompleteButton = document.getElementById("clearCompleteButton");
}
addButton.addEventListener("click", () => {
  displayAddEditPage();
  clearForm();
  populateProjectSelectionsAddEditPage();
});
function addEventListenerToclearCompleteButton() {
  clearCompleteButton.addEventListener("click", () => {
    clearCompletedTodos();
    render();
  });
}
//sortButton Section
let sortButtonNodeList;

function getSortButtonNodeList() {
  sortButtonNodeList = document.querySelectorAll(".sortButton");
}
function addListenersToSortButtons() {
  sortButtonNodeList.forEach((button) => {
    button.addEventListener("click", () => {
      sortArray(button.dataset.sort);
      render();
    });
  });
}

//doneUnDoneButtons Section
let doneUnDoneButtons = [];
function getDoneUnDoneButtonsNodeList() {
  doneUnDoneButtons = document.querySelectorAll(".doneUnDoneButtons");
}
function addListenersToDoneUnDoneButtons() {
  doneUnDoneButtons.forEach((button) => {
    button.addEventListener("click", () => triggerToggleComplete(button));
  });
}
function triggerToggleComplete(button) {
  todoArray[button.dataset.index].toggleComplete();
  render();
}

//editButtons Section
let editButtons = [];
let todoIndex = "";
function getEditButtonsNodeList() {
  editButtons = document.querySelectorAll(".editButtons");
}
function addListenersToEditButtons() {
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      displayAddEditPage();
      populateProjectSelectionsAddEditPage();
      updateFormWithCurrentTodoInformation(button);
      setIndexValue(button);
      saveButton.classList.remove("hide");
      addEditDeleteButton.classList.remove("hide");
    });
  });
}

function updateFormWithCurrentTodoInformation(button) {
  let todo = todoArray[button.dataset.index];

  titleInput.value = todo.title;
  selectProject.value = todo.project;
  dueDate.value = todo.dueDate;
  priority.value = todo.priority;
  notesInput.value = todo.notes;
}

function setIndexValue(button) {
  todoIndex = button.dataset.index;
}

//notesButtons
let notesButtons = [];
function getNotesButtonNodeList() {
  notesButtons = document.querySelectorAll(".notesButton");
}
function addListenersToNotesButtons() {
  notesButtons.forEach((button) => {
    button.addEventListener("click", () => {
      displayNotesPage();
      populateNotesPage(button);
    });
  });
}

//#endregion notesButtons

function updateAllTodoPageQuerySelectorsAndListeners() {
  getNotesButtonNodeList();
  addListenersToNotesButtons();
  getDoneUnDoneButtonsNodeList();
  addListenersToDoneUnDoneButtons();
  getClearCompleteButtonDomElement();
  addEventListenerToclearCompleteButton();
  getSortButtonNodeList();
  addListenersToSortButtons();
  getEditButtonsNodeList();
  addListenersToEditButtons();
}

//#endregion to-do Page

//#region addEditPage

//#region addEditPage querySelectors
const titleInput = document.getElementById("titleInput");
const selectProject = document.getElementById("selectProject");
const addNewProjectInput = document.getElementById("addNewProjectInput");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const notesInput = document.getElementById("notesInput");
const saveButton = document.getElementById("saveButton");
const addEditBackButton = document.getElementById("addEditBackButton");
const addEditDeleteButton = document.getElementById("addEditDeleteButton");
//#endregion

//#region addEditPage eventListeners
titleInput.addEventListener("input", () => toggleSaveAndDeleteButtonDisplay());

saveButton.addEventListener("click", () => {
  saveTodo(todoIndex);
  displayTodoPage();
});

addEditBackButton.addEventListener("click", () => {
  displayTodoPage();
});

addEditDeleteButton.addEventListener("click", () => {
  displayDeleteTodoPage();
  displayTodoTitle();
});
//#endregion

//#region addEditPage functions
function toggleSaveAndDeleteButtonDisplay() {
  if (titleInput.value !== "") {
    saveButton.classList.remove("hide");
    addEditDeleteButton.classList.remove("hide");
  } else {
    saveButton.classList.add("hide");
    addEditDeleteButton.classList.add("hide");
  }
}

function clearForm() {
  titleInput.value = "";
  addNewProjectInput.value = "";
  dueDate.value = "";
  priority.value = "";
  notesInput.value = "";
}

function displayTodoTitle() {
  todoNameDeleteMessage.textContent = titleInput.value;
}

//create an array of projects

function createProjectList() {
  let projectsArray = [];

  todoArray.forEach((todo) => {
    if (!projectsArray.includes(todo.project)) {
      projectsArray.push(todo.project);
    }
  });
  projectsArray.push("None");
  return projectsArray;
}
//filter it so there is only one of each

function populateProjectSelectionsAddEditPage() {
  selectProject.innerHTML =
    ' <option value="" disabled selected>\r\n                Select Existing Project\r\n              </option>';
  let projects = createProjectList();
  projects.forEach((project) => {
    let option = document.createElement("option");
    option.value = project;
    option.innerHTML = project;
    selectProject.appendChild(option);
  });
}

//#endregion

//#endregion

//#region deletePage
const todoNameDeleteMessage = document.getElementById("todoNameDeleteMessage");
const deletePageBackButton = document.getElementById("deletePageBackButton");
const deletePageDeleteButton = document.getElementById(
  "deletePageDeleteButton"
);

deletePageBackButton.addEventListener("click", () => {
  displayAddEditPage();
});

deletePageDeleteButton.addEventListener("click", () => {
  deleteTodo(todoIndex);
  displayTodoPage();
});
//#endregion deletePage

//#region notes Page
const notesPageBackButton = document.getElementById("notesPageBackButton");
const notesPageTodoTitle = document.getElementById("notesPageTodoTitle");
const notesPageNotes = document.getElementById("notesPageNotes");

notesPageBackButton.addEventListener("click", () => displayTodoPage());

function populateNotesPage(button) {
  addTitleToNotesPage(button);
  addNotesToNotesPage(button);
}

function addTitleToNotesPage(button) {
  notesPageTodoTitle.textContent = todoArray[button.dataset.index].title;
}

function addNotesToNotesPage(button) {
  notesPageNotes.textContent = todoArray[button.dataset.index].notes;
}

//#endregion notes Page

//#region update querySelectors

window.addEventListener("load", render());
