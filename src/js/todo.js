const todoUl = document.querySelector("#js-todo")
const todoForm = todoUl.querySelector("form")
const TODOS_LS = "todos"

function loadTodos() {
  const jsonTodos = localStorage.getItem(TODOS_LS)
  const todos = JSON.parse(jsonTodos)
  if (todos) {
    todos.forEach(todoObj => {
      const { todo, state } = todoObj
      addTodo(todo, state)
      console.log(state)
    })
  }
}

function saveTodos() {
  const todos = []
  const lis = todoUl.querySelectorAll("li")
  lis.forEach(li => {
    const span = li.querySelector("span")
    const checkBtn = li.querySelector("button")
    const todoObj = {
      state: checkBtn.innerText,
      todo: span.innerText
    }
    todos.push(todoObj)
  })
  const jsonTodos = JSON.stringify(todos)
  localStorage.setItem(TODOS_LS, jsonTodos)
}

function addTodo(todo, state) {
  if (todo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    const checkBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")
    checkBtn.innerText = "⬜"
    if (state === "✅") {
      span.classList.add("text-line-through")
      checkBtn.innerText = "✅"
    }
    span.innerText = todo
    deleteBtn.innerText = "❌"
    checkBtn.classList.add("btn")
    deleteBtn.classList.add("btn")
    li.append(checkBtn, span, deleteBtn)
    checkBtn.addEventListener("click", event => {
      span.classList.toggle("text-line-through")
      if (checkBtn.innerText === "⬜") {
        checkBtn.innerText = "✅"
      } else {
        checkBtn.innerText = "⬜"
      }
      saveTodos()
    })
    deleteBtn.addEventListener("click", event => {
      li.remove()
      saveTodos()
    })
    li.classList.add("list-group-item")
    todoUl.appendChild(li)
  }
}

function init() {
  loadTodos()
  todoForm.addEventListener("submit", event => {
    event.preventDefault()
    const input = todoForm.querySelector("input")
    const todo = input.value
    input.value = ""
    addTodo(todo)
    saveTodos()
  })
}

init()
