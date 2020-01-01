//console.log('Hello');
//Weather app
let temp;
let loc;
let icon;
let humidity;
let wind;
let direction;
let cloudy;
let sunrise;
let sunset;

// this function to return real value and show it on the browser
function renderOutput(data) {
  temp = document.getElementById("temperature");
  loc = document.getElementById("location");
  icon = document.getElementById("icon");
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  direction = document.getElementById("direction");
  cloudy = document.getElementById("cloudy");
  sunrise = document.getElementById("sunrise");
  sunset = document.getElementById("sunset");

  // to convert Sunrise and sunset calculations for api weather

  let unixSunrise = data.sys.sunrise;
  let dateSunrise = new Date(unixSunrise * 1000);
  let timeSunrise = dateSunrise.getHours() + ":" + dateSunrise.getMinutes();
  console.log(timeSunrise);

  let unixSunset = data.sys.sunset;
  let dateSunset = new Date(unixSunset * 1000);
  let timeSunset = dateSunset.getHours() + ":" + dateSunset.getMinutes();
  console.log(timeSunset);

  // this function to convert kelvin degree to celsius
  let celsius = Math.round(data.main.temp - 273.15);


  //const imag = `<img src="imgs/codes/${data.weather[0].id}.png" />`


  // to show the results in the browser
  temp.innerHTML = celsius;
  loc.innerHTML = data.name;
  icon.innerHTML = data.weather[0].id;
  //icon.innerHTML = imag;
  humidity.innerHTML = data.main.humidity;
  wind.innerHTML = data.wind.speed;
  direction.innerHTML = data.wind.deg;
  cloudy.innerHTML = data.weather[0].description;
  sunrise.innerHTML = timeSunrise;
  sunset.innerHTML = timeSunset;
}

// this function it will fetch the weather data from openweathermap.com
function fetchData(query) {
  return fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=cfa89385db7dafc0915ea467d61fea54"
  )
    .then(response => response.json())
    .then(renderOutput);
}

function fetch_Start(input) {
  input.preventDefault();

  if (isNaN(query.value)) {
    const query = document.getElementById("query").value;
    console.log(query);
    fetchData(query);
  } else if (query.value == "") {
    alert("Please Write A City Name");
  } else {
    alert("Please Write A City Name Not A Number");
  }
}

// here we take the button action and give it function

const btn = document.getElementById("fetch-data");
btn.addEventListener("click", fetch_Start);

//Optional a map showing where the city is located

/* 

let map;
function initMap() {
  let geocoder = new google.maps.Geocoder();

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.69, lng: 12.57},
    zoom: 8
  });

  geocoder.geocode({'address': "Copenhagen"}, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });

} */
