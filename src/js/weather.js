const weather = document.querySelector("#js-weather")

const API_KEY = '4e13cb81ca5a4ef23f7cbee84ea7bd77'
const COORDS = 'coords'

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  ).then(response => response.json()).then(json => {
    const temperature = json.main.temp
    const place = json.name
    weather.innerText = `${temperature} @ ${place}`
  })
}

function saveCoords(coordsObject) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObject))
}

function handleGeoSuccess(position) {
  const { latitude, longitude } = position.coords
  const coordsObject = {
    latitude,
    longitude
  }
  saveCoords(coordsObject)
  getWeather(latitude, longitude)
}
function handleGeoFailed() {
  console.log("Failed!")
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFailed)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords) {
    const parseCoords = JSON.parse(loadedCoords)
    getWeather(parseCoords.latitude, parseCoords.longitude)
  } else {
    askForCoords()
  }
}

function init() {
  loadCoords()
}
init()