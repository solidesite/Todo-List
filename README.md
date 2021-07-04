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
    - 삼항연산자로 if문 축약하기

---
## 2021.7.4 새로 추가하고싶은 기능
- 입력시 li가 아래로 스르륵 내려오는 애니메이션 추가하기
- 입력창 값이 비어있을 때 엔터 막기
- 확인 버튼 토글 이벤트로 변경하기
- 전체삭제 기능 추가하기

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
    4. appendChild로 todoList(ul) 변수에 li 추가하기
4. value값을 비워놓아 엔터 후 입력창이 공백이 되게하기
5. like 아이콘 클릭 이벤트 추가
    1. 클릭 이벤트가 실행되어야 할 곳 찾기
    2. 삼항연산자를 이용하여 토글 이벤트 생성
6. manage 아이콘 클릭 이벤트 추가
    1. 확인버튼 - 클릭 시 li에 'done'클래스 생성
    2. 삭제버튼 - 클릭 시 li 삭제

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
삼항 연산자

`조건 ? 참인경우 : 거짓인경우`

---
## 알게된점
- `list-style: none;` 리스트 스타일을 초기화하는 명령

- `justify-content: space-between;` 중요하지 않을 줄 알았는데 양쪽 정렬을 시킬 때 유용하다

- `text-decoration: line-through;` 텍스트에 중앙 선 (삭제표시)생성

- `const li = e.target.parentNode.parentNode;` 이벤트 안의 target 안의 parentNode 안의 parentNode. 즉 icon의 span 안의 li를 뜻한다

- 각각의 다른 함수에서 쓰인 변수는 이름이 같아도 영향을 주지 않는다.

- `classList.toggle()` 토글로 클래스가 있으면 제거하고 없으면 추가한다.

---
## 어려웠던점, 헤맨 부분
- js - keypress에서 enter 키 값이 무엇인지 알아내는 부분
```js
todoInput.addEventListener("keypress", function (e) {
    console.log(e)
})
```
console을 보면 엔터의 키 코드가 keyCode: 13라고 찍혀있는 것을 볼 수 있다.

- li 안에 like, itme, manage를 넣어야 하는데 item만 li로 설정해서 많은 부분을 고쳐야했다.

- `icon1.innerText = ("check")`를 `icon1.innerText("check")`로 써서 오류가 났다.

- like버튼 클릭 이벤트를 만들 때 레이아웃 확인용으로 만들었던 li는 like버튼 클릭이 되지 않았다. 그래서 오류가 난 줄 알았는데 입력창에 입력되어 나온 li에서는 클릭 이벤트 실행이 잘 되었다.

- `const li = e.target.parentNode.parentNode;` 코드의 이해

- 새로 추가한 기능 중 확인버튼 토글 이벤트를 작성할 때 삼항연산자의 조건을 어떻게 작성할 지 고민했다. li에 클래스가 없으면 done클래스를 붙이고 아니면 done클래스를 삭제시키는 조건으로 하면 될 것 같은데 클래스가 있는지 없는지 확인하는 명령어를 모르겠다. 찾아보니 `classList.contains`라는 메소드가 있다! 더 나아가 토글로 클래스를 붙였다 떼었다 할 수 있는 `classList.toggle()`도 알게 되었다.

---

## 궁금한점
```css
ul li .favorite{
    flex: 1;
    color: salmon;
}
```
- favorite 아이콘이 들어있는 span의 클래스에 색상을 지정하면 색 적용이 안되는데
```css
.icon-like {
    color: salmon;
}
```
favorite 아이콘에 직접 클래스를 걸어 적용하면 적용이 된다.

- 컨텐츠 전체를 wrapper로 감싸는 이유를 모르겠다.

- `const generateTodo = (todo) => {}`에서 매개변수 todo에 대한 이해가 부족함

---
## 느낀점
강의를 보고 처음 따라 만들었을 땐 이 기능을 왜 쓰는지, 어떻게 처리되는 것인지 전혀 이해가 안 갔는데 천천히 다시 보면서 '왜 이렇게 만들었을까?'를 생각해보며 정리해보니 그제야 이해가 가기 시작해서 신기했다.

모르는 부분을 스스로 찾아내고 적용시키는 데 성공할 때면 정말 짜릿했다.