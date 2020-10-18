const NAME_LS = "username"
const name = document.querySelector("#js-name")
const nameForm = name.querySelector("form")
const nameLs = localStorage.getItem(NAME_LS)

function init() {
  if (nameLs) {
    name.innerText = `Hello, ${nameLs}`    
  } else {
    nameForm.addEventListener("submit", event => {
      const input = nameForm.querySelector("input")
      const inputName = input.value
      event.preventDefault()
      name.innerText = `Hello, ${inputName}`
      localStorage.setItem(NAME_LS, inputName)
    })
  }
}

init()