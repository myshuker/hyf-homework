// Warmup

// 1-
setTimeout(function() {
  console.log("Called after 2.5 seconds");
}, 2500);

// 2-Create a function that takes 2 parameters
function StrangName(delay, stringToLog) {
  setTimeout(function() {
    console.log(stringToLog);
  }, delay * 1000);
}

StrangName(5, "this string logged after 5 sec");
StrangName(3, "this string logged after 3 sec");

// 3-

function StrangName(delay, stringToLog) {
  setTimeout(function() {
    console.log("Called after 5 seconds");
  }, 5000);
}
const bttn = document.getElementById("btn");
bttn.addEventListener("click", StrangName);

// 4- Create two functions and assign them to two different variables

function earthLogger() {
  console.log("Earth");
}

function saturnLogger() {
  console.log("Saturn");
}

function planetLogFunction(func) {
  return func();
}
// shorter with arrow function
//const earthLogger = () => earth ;
//const saturnLogger = () = Saturn ;
//const planetLogFunction = func => func()

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// 5- Create a button with the text called "Log location".

function geoLocat() {
  navigator.geolocation.getCurrentPosition(function postion(pos) {
    let crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
  });
}
let btn2 = document.getElementById("find-me");
btn2.addEventListener("click", geoLocat);

// 6- ptional Now show that location on a map using fx the Google maps api

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: crd.latitude,
      lng: crd.longitude
    },
    zoom: 8
  });
}

// 7- Create a function called runAfterDelay.

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, function() {
  console.log("Should be logged after 4 sec");
});

// 8- finding double click

function doubleClick() {
  console.log("double click!");
}
bttn.addEventListener("dblclick", doubleClick);

// 9- Create a function called jokeCreator

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if ((shouldTellFunnyJoke = true)) {
    const logFunnyJoke = function () {
      console.log("it's funny joke");
    }
  } else {
   const logBadJoke = function() {
      console.log("it's bad joke");
    }
  }
}
jokeCreator(true,logFunnyJoke, logBadJoke);
