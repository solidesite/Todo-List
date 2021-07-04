const todoInput = document.querySelector("#input")
const todoList = document.querySelector(".list")
const likeButton = document.querySelector(".icon-like")

todoInput.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        generateTodo(todoInput.value)
        todoInput.value = ""
    }
})

const generateTodo = (todo) => {
    const li = document.createElement("li");
    const likeSpan = generateLike();
    li.appendChild(likeSpan);
    const itemSpan = generateItem(todo);
    li.appendChild(itemSpan)
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
    //like 클릭 이벤트
    icon.addEventListener("click", () => {
        // if문
        // if (icon.innerText === "favorite_border") {
        //     icon.innerText = "favorite"
        // } else {
        //     icon.innerText = "favorite_border"
        // }

        // 삼항연산자
        icon.innerText === "favorite_border" ? 
        icon.innerText = "favorite" : icon.innerText = "favorite_border"
    })
    
    return span
}

const generateItem = (todo) => {
    const span = document.createElement("span")
    span.classList.add("item")
    span.innerText = todo
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
    //클릭 이벤트
    icon1.addEventListener("click", (e) => {
        const li = e.target.parentNode.parentNode;
        li.classList.toggle("done")
        // li.classList.add("done")
    })
    span.appendChild(icon1)
    span.appendChild(icon2)
    return span
}