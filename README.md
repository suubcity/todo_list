# todo_list



<!-- click add button -->
displayPage(editpage)
<!-- when add page load -->
populate the project selector


<!-- delete page -->
populate id="todoNameDeleteMessage" with array[title]
back button return toaddEditPage 
delete button {
    returns to main page
    delete item from array
    render
}

<!-- clear compleated  -->
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

<!-- compleated page  -->
    clear button {
        switch to clear page
    }

    up arrow {
        done = false
        render()
    }

<!-- addeditpage  -->
save button {
    return to home page
    get data from form
    update the array obj
    clear form
}
back button {
    returns to main page
    clears form
}

delete button {
    displays deletepage
}


<!-- get date from form and format it module -->


<!-- array manipulation  module-->
store the todo list in an  object.

create a factory to make each todo list entry

let todoArray = [
 {
     "title": string
     "project": string
     "dueDate": date
     "priority": string
     "notes": string
     compleated: boolean
     what funnctions on the object??
 },
  {
     "title":
     "project":
     "dueDate":
     "priorit":
     "notes":
 }
]

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
    if there are true done tasks in array display compleated todos section
}

<!-- on the object  -->

delete todo from array

edit todo


<!--  -->
add


