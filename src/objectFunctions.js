import { format } from 'date-fns';

//this module can get all the data from the form and create the object and edit it
export let todoArray = [
  //todo generate these terst items using the factory
  // {
  //   title: "Shopping",
  //   project: "Home",
  //   dueDate: "2020-09-18",
  //   dateAdded: "2020-07-18",
  //   priority: "low",
  //   notes: "Do it now!",
  //   completed: true,
  //   toggleComplete: function () {
  //     this.completed = this.completed === false ? true : false;
  //   },
  // },
  // {
  //   title: "Wages",
  //   project: "Work",
  //   dueDate: "2020-09-18",
  //   dateAdded: "2020-06-18",
  //   priority: "high",
  //   notes: "Do it now!",
  //   completed: false,
  //   toggleComplete: function () {
  //     this.completed = this.completed === false ? true : false;
  //   },
  // },
  // {
  //   title: "Shopping",
  //   project: "Home",
  //   dueDate: "2020-09-18",
  //   dateAdded: "2020-09-18",
  //   priority: "medium",
  //   notes: "Do it now!",
  //   completed: false,
  //   toggleComplete: function () {
  //     this.completed = this.completed === false ? true : false;
  //   },
  // },
];

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

//#region event listeners
SAVE_BUTTON.addEventListener("click", () => {
  todoArray.push(todoFactory());
  console.table(todoArray);
});
//#endregion

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




// console.log(format(new Date(), 'eeee do-MMM-yyyy'));