const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");

todoInput.addEventListener("keypress", e => {
    if(e.keyCode === 13) { //데이터타입도 일치시키기
        generateTodo(todoInput.value)
    }
});

