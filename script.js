document.getElementById("add-btn").addEventListener("click", addTodo);

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById("todo-list");

        const todoItem = document.createElement("li");
        todoItem.classList.add("todo-item");

        const todoTextNode = document.createTextNode(todoText);
        todoItem.appendChild(todoTextNode);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function() {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(deleteBtn);
        todoList.appendChild(todoItem);

        todoInput.value = "";
    }
}
