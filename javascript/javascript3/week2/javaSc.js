//console.log("hello");

//window.addEventListener('load', function(){   })

// 1- Movies exercise

// here we fetch the movies from the server

const url =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);

    // Create an array of bad movies
    const allBadMovies = data.filter(movies => movies.rating < 4);
    console.log(allBadMovies);

    // Creat an array of bad movies since year 2000
    const badMovies2000 = allBadMovies.filter(movies => movies.year >= 2000);
    console.log(badMovies2000);

    // Create an array of the titles of the bad movies since year 2000
    const title = badMovies2000.map(movies => movies.title);
    console.log(title);
  });

// 2- Promise that resolves after set time --------------------------------

function myFunPromise(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

myFunPromise(3).then(() => {
  console.log("3 seconds has passed");
});

// or

function myFunPromise(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("3 seconds has passed");
    }, resolveAfter * 1000);
  });
}

myFunPromise(3).then(result => {
  console.log(result);
});

// 3- Rewrite time -----------------------------------------------

// - Rewrite setTimeout
function setTimeoutPromise(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

setTimeoutPromise(3).then(() => {
  console.log("3 seconds has passed");
});

// - Rewrite navigator.geolocation.getCurrentPosition

function getCurrentPostion() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        const currentCorrds = { long, lat };

        resolve(currentCorrds);
      },
      error => {
        console.error("Error to get your current");
        reject();
      }
    );
  });
}
getCurrentPostion()
  .then(position => {
    console.log(position);
  })
  .catch(error => console.error(error));

// 4- Fetching and waiting ---------------------

const url = "https://randomuser.me/api/";
fetch(url)
  .then(response => response.json())
  .then(data => {
    setTimeout(() => {
      console.log(data);
    }, 3000);
  });
  
// optional

const url = "https://randomuser.me/api/";
fetch(url)
  .then(resp => resp.json())
  .then(data => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  })
  .then(result => {
    console.log(result);
  });

// 5- Visual promise -------------------
