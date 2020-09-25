export function clearCompletedTodos() {
  todoArray = todoArray.filter((todo) => todo.completed === false);
}

export function sortArray(sortBy) {
  if (sortBy === "priority") {
    todoArray.sort((a, b) => {
      switch (a[sortBy]) {
        case "high":
          a = "a";
          break;
        case "medium":
          a = "b";
          break;
        case "low":
          a = "c";
          break;
      }
      switch (b[sortBy]) {
        case "high":
          b = "a";
          break;
        case "medium":
          b = "b";
          break;
        case "low":
          b = "c";
          break;
      }

      return a > b ? 1 : -1;
    });
  } else {
    todoArray.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  }
}

export let todoArray = [];

//this module can get all the data from the form and create the object and edit it

//#region buttons querySelectors
const saveButton = document.getElementById("saveButton");
const deletePageDeleteButton = document.getElementById(
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
export function saveTodo(todoIndex) {
  if (todoIndex !== "") {
todoArray.splice(todoIndex, 1);
todoArray.push(todoFactory());
    todoIndex = "";
  } else {
    todoArray.push(todoFactory());
  }
}


export function deleteTodo(todoIndex) {
  if (todoIndex !== "") {
todoArray.splice(todoIndex, 1);
    todoIndex = "";
  } 
}

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
    "AShopping",
    "Home",
    "2020-10-13",
    "low",
    "get her done",
    false
  )
);

todoArray.push(
  testTodoFactory(
    "BShopping",
    "Home",
    "2020-10-14",
    "high",
    "get her done",
    false
  )
);

todoArray.push(
  testTodoFactory(
    "ZShopping",
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
    "medium",
    "get her done",
    true
  )
);

todoArray.push(
  testTodoFactory("Drive", "Home", "2020-09-01", "high", "get her done", true)
);

//#endregion
