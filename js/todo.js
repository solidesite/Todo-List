const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const likeButton = document.querySelector(".like");

todoInput.addEventListener("keypress", e => {
    if(e.keyCode === 13) { //데이터타입도 일치시키기
        generateTodo(todoInput.value)
        todoInput.value = ""
    }
});

const generateTodo = (todo) => {
    const li = document.createElement("li");
    const likeSpan = generateLike();
    li.appendChild(likeSpan); // li에 generateLike의 값을 붙이기
    const itemSpan = generateItem(todo);
    li.appendChild(itemSpan);
    const manageSpan = generateManage();
    li.appendChild(manageSpan);
    todoList.appendChild(li)
}

//li의 각각의 파트 함수 (like 아이콘 / 텍스트 / manage 아이콘)
const generateLike = () => {
    const span = document.createElement("span");
    span.classList.add("todo-like")
    const icon = document.createElement("i");
    icon.classList.add("material-icons")
    icon.classList.add("like")
    icon.innerText = "favorite_border"
    span.appendChild(icon);
    //like 버튼 클릭 이벤트
    icon.addEventListener("click", () => {
        icon.innerText === "favorite_border" ?
        icon.innerText = "favorite" : icon.innerText = "favorite_border"
    })
    return span;
}
const generateItem = (todo) => {
    const span = document.createElement("span");
    span.classList.add("todo-item")
    span.innerText = todo;
    return span;
}
const generateManage = () => {
    const span = document.createElement("span");
    span.classList.add("todo-manage")
    const icon1 = document.createElement("i");
    const icon2 = document.createElement("i");
    icon1.classList.add("material-icons")
    icon1.classList.add("check")
    icon1.innerText = "check"
    icon2.classList.add("material-icons")
    icon2.classList.add("clear")
    icon2.innerText = "clear"
    //manage 버튼 클릭 이벤트
    icon1.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;
        li.classList.add('done')
    })
    icon2.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;
        todoList.removeChild(li)
    })
    span.appendChild(icon1);
    span.appendChild(icon2);
    return span
}
