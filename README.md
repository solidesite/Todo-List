# todo-list 만들기
2021.6.30 ~ 2021.7.

index.html / style.css / todo.js - 강의를 보며 함께 만든 버전

todo.html / todo-style.css / todo-js.js - 강의 보지않고 복습하며 스스로 만든 버전

## todo-list 프로젝트로 익힌 기능
- flex를 이용한 수평정렬
- materialize에서 아이콘 가져오기
- md문법 - 순서가 필요하지 않는 목록 생성, 목록 속의 목록 (tab키)
- js
    - queryselector, addeventlistner로 선택자에 이벤트 추가하기
    - keypress로 입력한 키보드 값 찾기
    - createElement로 요소 생성과 appendChild로 요소 집어넣기

---
## 중요한 부분 복습
js 기능 만드는 순서 
1. queryselector로 인풋창 선택하기
2. 엔터의 keyCode가 무엇인지 알아낸 후 if문으로 keyCode가 해당 숫자일 때 실행되는 함수 생성
3. list가 추가되는 함수 만들기 - generateTodo함수 생성
    1. createElement로 li 만들기
    2. like, item, manage가 들어갈 각각의 함수가 할당된 변수 생성
        1. createElement로 span 생성
        2. classList.add로 span에 클래스 지정 (html에 설정한 클래스로)
        3. icon생성, 클래스 지정, innerText로 icon 불러오기
        4. appendChild로 span에 icon 넣기
        5. `return span`으로 span 반환
    3. appendChild로 li에 like, item, manage 함수 집어넣기
    4. querySelector로 ul부분 선택하기 (함수 밖)
    4. appendChild로 todoList 변수에 li 추가하기

---
`addEventListner("행동", "기능(함수)")` - 행동이 일어나면 기능의 부분을 실행함

```js
todoInput.addEventListener("keypress", function (e) {
    console.log(e)
})
```
함수의 e가 기본적으로 제공이 되는 이벤트라고 한다. addeventlistner의 행동이 발생 했을 때 그 발생한 이벤트의 정보를 담고 있다.

```js
if (e.keyCode === 13) {
        console.log("ent")
}
```
keyCode를 camel case로 쓰기/ ===로 데이터타입까지 일치시켜야 함.

---
## 알게된점
`list-style: none;`
리스트 스타일을 초기화하는 명령

`justify-content: space-between;`
중요하지 않을 줄 알았는데 양쪽 정렬을 시킬 때 유용하다


---
## 어려웠던점, 헤맨 부분
js - keypress에서 enter 키 값이 무엇인지 알아내는 부분
```js
todoInput.addEventListener("keypress", function (e) {
    console.log(e)
})
```
console을 보면 엔터의 키 코드가 keyCode: 13라고 찍혀있는 것을 볼 수 있다.

li 안에 like, itme, manage를 넣어야 하는데 item만 li로 설정해서 많은 부분을 고쳐야했다.

`icon1.innerText = ("check")`를 `icon1.innerText("check")`로 써서 오류가 났다.

---

## 궁금한점
```css
ul li .favorite{
    flex: 1;
    color: salmon;
}
```
favorite 아이콘이 들어있는 span의 클래스에 색상을 지정하면 색 적용이 안되는데
```css
.icon-like {
    color: salmon;
}
```
favorite 아이콘에 직접 클래스를 걸어 적용하면 적용이 된다.

컨텐츠 전체를 wrapper로 감싸는 이유를 모르겠다.

