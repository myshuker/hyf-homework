let input = document.getElementById("input");


// this function to return real value and show it on the browser
function renderOutput(data) {
  // to convert Sunrise and sunset calculations for api weather
  const unixSunrise = data.sys.sunrise;
  const dateSunrise = new Date(unixSunrise * 1000);
  const timeSunrise = dateSunrise.getHours() + ":" + dateSunrise.getMinutes();
  console.log(timeSunrise);

  const unixSunset = data.sys.sunset;
  const dateSunset = new Date(unixSunset * 1000);
  const timeSunset = dateSunset.getHours() + ":" + dateSunset.getMinutes();
  console.log(timeSunset);

  /* 
  // this function to convert temperature in kelvin degree to celsius...but now I don't use it because I used the metric units
  let celsius = Math.round(data.main.temp - 273.15);
  let minTemp = Math.round(data.main.temp_min - 273.15);
  let maxTemp = Math.round(data.main.temp_max - 273.15);

 */
  //here bring the id from the html page and return the results to the browser
  const celsiusStr = "°C";

  document.getElementById("temp").innerHTML = data.main.temp + celsiusStr;
  document.getElementById("cloudy").innerHTML = data.weather[0].description;

  document.getElementById("mintemp").innerHTML = data.main.temp_min + celsiusStr;
  document.getElementById("maxtemp").innerHTML = data.main.temp_max + celsiusStr;
  document.getElementById("humid").innerHTML = data.main.humidity + "%";
  document.getElementById("wind").innerHTML = data.wind.speed + "m/s";
  document.getElementById("pressure").innerHTML = data.main.pressure + "hPa";
  document.getElementById("sunrise").innerHTML = timeSunrise;
  document.getElementById("sunset").innerHTML = timeSunset;

  const image = document.querySelector("#icon");
  const weatherIcon = document.createElement("img");
  weatherIcon.src =
    "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  weatherIcon.setAttribute("width", "100");
  image.appendChild(weatherIcon);
}

// this function it will fetch the weather data from openweathermap.com
function fetchData(weather) {

  const API_KEY = "cfa89385db7dafc0915ea467d61fea54";
  //let api = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&units=metric&appid=${API_KEY}`;
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${API_KEY}`;
  
  // here I tried to code with all the cities but its not success...can you fixed it please
  //const api = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${API_KEY}`;
  
  fetch(api)
    .then(response => response.json())
    .then(renderOutput);
}

// this the function after button clicked
function fetch_data() {
  //let query = document.getElementById("input").value;
  let query = input.value;
  console.log(query);
  
  if (query == "") {
    alert("Please Write A City Name");
  } else if (isNaN(query)) {
    console.log(query);
    city.innerHTML = query;
    fetchData(query);
  } else {
    alert("Please Write A City Name Not A Number");
  }
}

// here we take the button action and give it function
const search = document.getElementById("search");
search.addEventListener("click", fetch_data);

// to get the current position... but it doesn't work....
function fetch_position() {

  navigator.geolocation.getCurrentPosition(position => {
   const long = position.coords.longitude;
   const lat = position.coords.latitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`)
      .then(resp => resp.json())
      .then(response => response.json())
      .then(renderOutput);
  });
}

const locPos = document.getElementById("locPostion");
locPos.addEventListener("click", fetch_position);
