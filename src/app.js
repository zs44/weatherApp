let apiKey = "dc913128ccaa43cdc1ca63d7d482beef";
let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemp);
function formatDate(timeStamp) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  let date = new Date(timeStamp);
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
if (hour < 10) {
  hour = `0${hour}`;
}
  return `${day} ${hour}:${minute}`;
}
function displayTemp(response) {
  let cityElm = document.querySelector("#city");
  cityElm.innerHTML = `${response.data.name} Province`;
  let tempElm = document.querySelector("#temp");
  tempElm.innerHTML = Math.round(response.data.main.temp);
  let descriptionElm = document.querySelector("#description");
  descriptionElm.innerHTML = response.data.weather[0].description;
  let humidityElm = document.querySelector("#Humidity");
  humidityElm.innerHTML = response.data.main.humidity;
  let windElm = document.querySelector("#Wind");
  windElm.innerHTML = response.data.wind.speed;
  let dateElm = document.querySelector("#date");
  dateElm.innerHTML = formatDate(response.data.dt * 1000);
  let iconElm = document.querySelector("#icon");
  iconElm.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let altElm = document.querySelector("#alt");
  altElm.setAttribute("alt", response.data.weather[0].description);
}
