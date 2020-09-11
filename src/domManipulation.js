//#region pages querySelectors

const DELETE_TODO_PAGE = document.getElementById("deleteTodoPage");
const CLEAR_COMPLEATED_PAGE = document.getElementById("clearCompleatedPage");
const NOTES_PAGE = document.getElementById("notesPage");
const TODO_PAGE = document.getElementById("todoPage");
const ADD_EDIT_PAGE = document.getElementById("addEditPage");

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

//#region button eventListeners
ADD_BUTTON.addEventListener("click", () => {
  displayAddEditPage();
  ADD_BUTTON.classList.add("hide");
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
  DELETE_TODO_PAGE,
  CLEAR_COMPLEATED_PAGE,
  NOTES_PAGE,
  TODO_PAGE,
  ADD_EDIT_PAGE,
];

//#region local functions

function displayPage(pageToDisplay) {
  pageToDisplay.classList.remove("hide");
  pagesArray.forEach((page) => {
    if (page !== pageToDisplay) {
      page.classList.add("hide");
    }
  });
}
//#endregion

//#region exports

function displayDeleteTodoPage() {
  displayPage(DELETE_TODO_PAGE);
}
function displayClearCompleatedPage() {
  displayPage(CLEAR_COMPLEATED_PAGE);
}
function displayNotesPage() {
  displayPage(NOTES_PAGE);
}
function displayTodoPage() {
  displayPage(TODO_PAGE);
  ADD_BUTTON.classList.remove("hide");
}
function displayAddEditPage() {
  displayPage(ADD_EDIT_PAGE);
}

//#endregion
