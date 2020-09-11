const DELETE_TODO_PAGE = document.getElementById("deleteTodoPage");
const CLEAR_COMPLEATED_PAGE = document.getElementById("clearCompleatedPage");
const NOTES_PAGE = document.getElementById("notesPage");
const TODO_PAGE = document.getElementById("todoPage");
const ADD_EDIT_PAGE = document.getElementById("addEditPage");

let pagesArray = [
  DELETE_TODO_PAGE,
  CLEAR_COMPLEATED_PAGE,
  NOTES_PAGE,
  TODO_PAGE,
  ADD_EDIT_PAGE,
];

export function displayPage(pageToDisplay) {
  pageToDisplay.classlist.remove("hide");
  pagesArray.forEach((page) => {
    if (page !== pageToDisplay) {
      page.classList.add("hide");
    }
  });
}
