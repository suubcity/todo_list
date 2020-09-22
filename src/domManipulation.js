import { todoArray } from "./objectFunctions";
import { format, parseISO } from "date-fns";

//#region html templates
let todoNavHtml =
  '          <nav id="todoNavTop">\r\n            <div id="displayByProject">\r\n              <h4 class="bold">View By Project</h4>\r\n              <select id="displayByProjectSelect">\r\n                <option value="all">All</option>\r\n                <option value="School">School</option>\r\n                <option value="Work">Todo List</option>\r\n              </select>\r\n            </div>\r\n            <h4 class="bold">Sort By:</h4>\r\n            <h4 class="sortButton bold">Due</h4>\r\n\r\n            <h4 class="sortButton">Priority</h4>\r\n            <h4 class="sortButton">Added</h4>\r\n            <h4 class="sortButton">Title</h4>\r\n          </nav>';

let completedTodosNavHtml =
  '      <hr />\r\n          <nav id="clearCompletedTodosNav">\r\n            <h2>Clear completed</h2>\r\n            <img\r\n              id="clearCompleteButton"\r\n              class="button redGlow"\r\n              src="https://res.cloudinary.com/dli7mlkdu/image/upload/v1599511969/Icons/005-trash_kbzvla.png"\r\n              alt="Delete"\r\n            />\r\n          </nav>';
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
//to-doPage
const ADD_BUTTON = document.getElementById("addButton");
// addEditPage
const saveButton = document.getElementById("saveButton");
const addEditBackButton = document.getElementById("addEditBackButton");
const addEditDeleteButton = document.getElementById("addEditDeleteButton");
//#endregion

//#region Form Inputs querySelectors
const titleInput = document.getElementById("titleInput");
const selectProject = document.getElementById("selectProject");
const addNewProjectInput = document.getElementById("addNewProjectInput");
const dueDate = document.getElementById("dueDate");
const priority = document.getElementById("priority");
const notesInput = document.getElementById("notesInput");

//#endregion

//#region elements querySelectors
// deleteTodoPage
const todoNameDeleteMessage = document.getElementById("todoNameDeleteMessage");

const deletePageBackButton = document.getElementById("deletePageBackButton");
const deletePageDeleteButton = document.getElementById(
  "deletePageDeleteButton"
);

//#endregion

//#region button eventListeners

ADD_BUTTON.addEventListener("click", () => {
  displayAddEditPage();
  clearForm();
  ADD_BUTTON.classList.add("hide");
  populateProjectSelections();
});

//#endregion

//#region display functions
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
  render();
}
function displayAddEditPage() {
  displayPage(addEditPage);
}

//#endregion display functions

//#region addEditPage
titleInput.addEventListener("input", () => toggleSaveAndDeleteButtonDisplay());

saveButton.addEventListener("click", () => {
  displayTodoPage();

  saveButton.classList.add("hide");

  console.table(todoArray);
});

addEditBackButton.addEventListener("click", () => {
  displayTodoPage();
});

addEditDeleteButton.addEventListener("click", () => {
  displayDeleteTodoPage();
  displayTodoTitle();
});

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

function populateProjectSelections() {
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

//#endregion addEditPage

//#region deletePage

deletePageBackButton.addEventListener("click", () => {
  displayAddEditPage();
});

deletePageDeleteButton.addEventListener("click", () => {
  displayTodoPage();
});
//#endregion deletePage

//#region todos page
let doneUnDoneButtonsNodeList = [];

function addListenerToCompleteButtons() {
  
  doneUnDoneButtonsNodeList.forEach(button => {
    button.addEventListener('click', () => triggerToggleComplete(button));
    
  });
}

function triggerToggleComplete(button) {
  console.table(button.dataset.index);
  todoArray[button.dataset.index].toggleComplete();
  render();
}




//#endregion

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
  getDoneUnDoneButtonsNodeList();
  addListenerToCompleteButtons();
}

function getDoneUnDoneButtonsNodeList() {
  
  doneUnDoneButtonsNodeList = document.querySelectorAll(".doneUnDoneButtons"); 

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
  todoNav.appendChild(imgInfo);

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

  const imgReturn = document.createElement("img");
  imgReturn.classList.add("button", "doneUnDoneButtons");
  imgReturn.src =
    "https://res.cloudinary.com/dli7mlkdu/image/upload/a_90/v1599600615/Icons/return_hitifz.png";
  imgReturn.alt = "Return";
  imgReturn.dataset.index = index;

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
  todoNav.appendChild(imgReturn);

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

//#region update querySelectors

window.addEventListener("load", render());




