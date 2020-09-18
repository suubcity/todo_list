# todo_list

add current date to all new created todos

create dom generation for completed todos




<!-- when add page load -->
populate the project selector


<!-- delete page -->

back button return toaddEditPage 
delete button {
    returns to main page
    delete item from array
    render
}

<!-- clear completed  -->
back button returns to main page
delete button {
    clears all items from array with completed = true.
    returns to main page
    renders
}

<!-- info page -->
back button does returns to main page

<!-- to do top nav  -->
view by project selector {
    on change render only todos of slected project
}

click sort by {
    give it the class of bold
    turn off bold on all others
    sort array by type clicked
    render
}


<!-- to do  -->
done button {
    change todoArray.number.done = true
    render
}

edit button {
    switch to addEditPage;
    populate form with data from array
}

info button {
    switch to info page
}

<!-- completed page  -->
    clear button {
        switch to clear page
    }

    up arrow {
        done = false
        render()
    }

<!-- addeditpage  -->
save button {
    
    get data from form
    update the array obj
    clear form
}
back button {
    
    clears form
}

delete button {
  populate id="todoNameDeleteMessage" with array[title]
}


<!-- get date from form and format it module -->


<!-- array manipulation  module-->
store the todo list in an  object.



<!-- dom manipulation -->
function that manages the display of things, only one page can be displayed at once. 

(have an array of pages)

function displayPage(page) {
    page.classlist.remove(hide); 
    pageArray.forEach(item => {
        if (not page) {
            add classlist hide 
        }
    }  )
}


render function {
    
    (when you render give each todo the index from the array)
    if there are true done tasks in array display completed todos section
}

<!-- on the object  -->

delete todo from array

edit todo


<!--  -->
add





          <!-- completed todos  -->
        
            <div class="todo completedTodo">
              <nav class="todoNav">
                
                  <img
                    class="button returnButton"
                    src="https://res.cloudinary.com/dli7mlkdu/image/upload/a_90/v1599600615/Icons/return_hitifz.png"
                    alt="Return Todo"
                  />
                
              </nav>

              <div class="todoInner">
                <h2 class="todoInfo title">Go shopping for a rad new tiger.</h2>
                <h5 class="todoInfo due">Due: 24/05/2022</h5>
                <h5 class="todoInfo priority">Priority: High</h5>
                <h5 class="todoInfo dateAdded">Added: 20/01/1999</h5>
                <h5 class="todoInfo project">Project: Work</h5>
              </div>
            </div>
          </div>