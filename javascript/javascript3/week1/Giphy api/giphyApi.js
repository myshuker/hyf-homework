const outInfo = document.getElementById("outInfo");

function outputGif(gif) {
  const gifData = gif.data;
  for (let i = 0; i < gifData.length; i++) {
    const title = document.createElement("p");
    title.innerHTML = gif.data[i].title;
    //outInfo.appendChild(title);

    const image = document.createElement("img");
    image.src = gif.data[i].images.original.url;
    image.setAttribute("width", "300");
    outInfo.appendChild(image);
    //outInfo.innerHTML = image ;
  }
}

function fetchGif(data) {
  //data.preventDefault();
  const query = document.getElementById("input").value;
  console.log(query);
  if (query.trim() == "") {
    const alert = "Please enter your Giphy word";
    outInfo.innerHTML = alert;
  } else {
    fetchDataSearch(query);
  }
}

let API_KEY = "qRwUpP5gK06dTR1sjU4h1hElheW0lmx3";
function fetchDataSearch(query) {
  const numberOfGif = document.getElementById("numberOfGif").value;
  //let api = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${numberOfGif}&q=25&offset=0&rating=G&lang=en=`;
  let api = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${numberOfGif}`;
  // let api = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=${numberOfGif}`
  
  fetch(api)
  .then(response => response.json())
  .then(outputGif);
}

// call  search button
const search = document.getElementById("search");
search.addEventListener("click", fetchGif);
