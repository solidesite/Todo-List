const todoInput = document.querySelector("#input")
const todoList = document.querySelector(".list")

todoInput.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        generateTodo(todoInput.value)
    }
})

const generateTodo = () => {
    const li = document.createElement("li");
    const likeSpan = generateLike();
    li.appendChild(likeSpan);
    // const itemSpan = generateItem();
    const manageSpan = generateManage();
    li.appendChild(manageSpan)
    todoList.appendChild(li)
}

const generateLike = () => {
    const span = document.createElement("span")
    span.classList.add("favorite")
    const icon = document.createElement("i")
    icon.classList.add("material-icons")
    icon.classList.add("icon-like")
    icon.innerText = "favorite_border"
    span.appendChild(icon)
    return span
}

const generateManage = () => {
    const span = document.createElement("span")
    span.classList.add("manage")
    const icon1 = document.createElement("i")
    const icon2 = document.createElement("i")
    icon1.classList.add("material-icons")
    icon1.classList.add("icon-check")
    icon1.innerText = ("check")
    icon2.classList.add("material-icons")
    icon2.classList.add("icon-clear")
    icon2.innerText = ("clear")
    span.appendChild(icon1)
    span.appendChild(icon2)
    return span
}