const clock = document.querySelector("#js-clock")

function loadTime() {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
  loadTime()
  setInterval(loadTime, 1000)
}

init()