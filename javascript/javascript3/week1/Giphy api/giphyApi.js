console.log("Say Hello");

function outputGif(gif) {


  const outInfo = document.getElementById("outInfo");
  let gifData = gif.data;
   for (let i = 0; i < gifData.length; i++) {

    let title = document.createElement('p');
    title.innerHTML = gif.data[i].title;
    //outInfo.appendChild(title);

    let image = document.createElement("img");
    image.src = gif.data[i].images.original.url;
    image.setAttribute("width", "300");
    outInfo.appendChild(image);
    //outInfo.innerHTML = image ; 


  }
}

function fetchDataSearch(query) {
  let API_KEY = "qRwUpP5gK06dTR1sjU4h1hElheW0lmx3";
  //let api = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=25&offset=0&rating=G&lang=en=`;
  let api =`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=`;
  api = api.concat(query);
  fetch(api)
    .then(response => response.json())
    .then(outputGif);
}

function fetchGif(data) {
  //data.preventDefault();
  const query = document.getElementById("input").value;
  //return query
  console.log(query);
  if (query == "") {
    alert("Please enter your Giphy word");
  } else {
    fetchDataSearch(query);
  }
}
// call  search button
const search = document.getElementById("search");
search.addEventListener("click", fetchGif);
