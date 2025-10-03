let counter = 1

document.querySelector("#add").addEventListener("click" , () => {
    const inputVal = document.querySelector("input");
    const todos = document.querySelector(".todos")

    // create a todo div
    const newToDoDiv = document.createElement("div")
    newToDoDiv.setAttribute("id", `todo-${counter++}`);

    // create h4 element
    const newToDo = document.createElement("h4");
    newToDo.textContent = inputVal.value;

    // create a delete button
    const newToDoDel = document.createElement("button");
    newToDoDel.setAttribute("class", "delete")
    newToDoDel.textContent = "Delete";

    // create a update button
    const newToDoUpdate = document.createElement("button");
    newToDoUpdate.setAttribute("class", "update")
    newToDoUpdate.textContent = "Update";

    // add h4, delete, update button to div
    newToDoDiv.append(newToDo, newToDoDel, newToDoUpdate);

    // add newToDo to todos
    todos.appendChild(newToDoDiv);

    // clear the input box
    inputVal.value = ''
});

// deleting
document.querySelector(".todos").addEventListener("click", (event) => {
    const classLists = event.target.classList;

    if (classLists.contains("delete")) {
        console.log("delete clicked");
        event.target.parentElement.remove();
    } else if(classLists.contains("update")) {
        console.log("Update clicked");

        const toDoDiv = event.target.parentElement;
        const toDoText = toDoDiv.querySelector("h4")

        // Option A: Prompt
        // const newVal = prompt("Update your todo:", toDoText.textContent);
        // if (newVal) {
        //     toDoText.textContent = newVal;
        // }

        // Replace h4 to input tag
        const inputEle = document.createElement("input");
        inputEle.value = toDoText.textContent;

        toDoDiv.replaceChild(inputEle, toDoText);

        inputEle.focus();

        inputEle.addEventListener("blur", () => {
            toDoText.textContent = inputEle.value;
            toDoDiv.replaceChild(toDoText, inputEle);
        })
    }
});

