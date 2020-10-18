const body = document.querySelector("body")

const IMAGE_NUMBER = 14

function getRandom() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER) + 1
  return number
}

function paintImage(imgNumber) {
  const image = new Image()
  image.src = `src/images/${imgNumber}.jpg`
  const paintImage = function () {
    body.appendChild(image)
    image.classList.add("bgImage")
  }
  image.onload = paintImage
}

function init() {
  const randomNumber = getRandom()
  paintImage(randomNumber)
}

init()