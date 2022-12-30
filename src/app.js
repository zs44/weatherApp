let apiKey = "dc913128ccaa43cdc1ca63d7d482beef";
let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemp);
function displayTemp(response) {
    let cityElm = document.querySelector("#city");
  cityElm.innerHTML = `${response.data.name} Province`;
  let tempElm = document.querySelector("#temp");
  tempElm.innerHTML = Math.round(response.data.main.temp);
  let descriptionElm = document.querySelector("#description");
  descriptionElm.innerHTML = response.data.weather[0].description;
  let HumidityElm = document.querySelector("#Humidity");
  HumidityElm.innerHTML = response.data.main.humidity;
  let WindElm = document.querySelector("#Wind");
  WindElm.innerHTML = response.data.wind.speed;
}