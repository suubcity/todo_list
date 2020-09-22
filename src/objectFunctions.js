import { test } from "./domManipulation";

//this module can get all the data from the form and create the object and edit it
export let todoArray = [];

//#region buttons querySelectors
const ADD_BUTTON = document.getElementById("addButton");
const saveButton = document.getElementById("saveButton");
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

//#region event listeners
saveButton.addEventListener("click", () => {
  todoArray.push(todoFactory());
  console.table(todoArray);
});
//#endregion

//#region functions

const todoFactory = () => {
  return {
    title: titleInput.value,
    project: addNewProjectInput.value || selectProject.value,
    dueDate: dueDate.value,
    priority: priority.value,
    dateAdded: new Date(),
    notes: notesInput.value,
    completed: false,
    toggleComplete: function () {
      this.completed = this.completed === false ? true : false;
     
    },
  };
};

//#region test data area

const testTodoFactory = (
  title,
  project,
  dueDate,
  priority,
  notes,
  completed
) => {
  return {
    title,
    project,
    dueDate,
    priority,
    dateAdded: new Date(),
    notes,
    completed,
    toggleComplete: function () {
      this.completed = this.completed === false ? true : false;
      
    },
  };
};

todoArray.push(
  testTodoFactory(
    "Shopping",
    "Home",
    "2020-10-13",
    "low",
    "get her done",
    false
  )
);

todoArray.push(
  testTodoFactory(
    "Shopping",
    "Home",
    "2020-09-01",
    "high",
    "get her done",
    false
  )
);

todoArray.push(
  testTodoFactory(
    "Shopping",
    "Home",
    "2020-12-01",
    "medium",
    "get her done",
    false
  )
);

todoArray.push(
  testTodoFactory(
    "Shopping",
    "Home",
    "2020-09-01",
    "Medium",
    "get her done",
    true
  )
);

todoArray.push(
  testTodoFactory("Drive", "Home", "2020-09-01", "High", "get her done", true)
);

//#endregion
