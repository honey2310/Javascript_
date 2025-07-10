const heading = document.getElementById("heading");
const datetime = document.getElementById("datetime");
const input = document.getElementById("input");
const search = document.getElementById("search");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather-description");
const feels = document.querySelector(".feels");
const humidity = document.querySelector(".hum");
const wind = document.querySelector(".wind");
const image=document.querySelector(".weather-icon")

function displayweather(CityName) {
  const apikey =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    CityName +
    "&appid=050bcc589fe73760676beb39119f11a3&units=metric";

  fetch(apikey)
    .then((res) => res.json())
    .then((data) => {
      heading.textContent = data.name;
      temp.textContent = Math.round(data.main.temp) + "°C";
      weather.textContent = data.weather[0].description;
      feels.textContent =
        "Feels like:" + " " + Math.round(data.main.feels_like) + "°C";
      humidity.textContent =
        "Humidity:" + " " + Math.round(data.main.humidity) + "%";
      wind.textContent =
        "Wind:" + " " + Math.round(data.wind.speed) + " " + "km/h";
        image.src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
    });
}

search.addEventListener("click", () => {
  let CityName = input.value.trim();
  displayweather(CityName);
  setInterval(show, 1000);
  show();
});

CityName="";

function show() {
  const dateshow = new Date();
  let hourtime = dateshow.getHours();
  let minTime = dateshow.getMinutes();
  let sectime = dateshow.getSeconds();

  let arrdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let arrmonths = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  let day = arrdays[dateshow.getDay()];
  let date = dateshow.getDate();
  let month = arrmonths[dateshow.getMonth()];

  const time = `${day}, ${date} ${month} 2025 | ${hourtime} : ${minTime} PM`;
  datetime.textContent = time;
}




