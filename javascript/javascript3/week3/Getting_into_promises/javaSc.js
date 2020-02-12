/*fetch ('https://api.github.com/search/repositories?q=user:benna100')
.then(response => response.json())
.then(data=>{
    console.log(data);
*/

const myList = document.getElementById("myList");

const url1 = "https://api.github.com/search/repositories?q=user:JohnYazji";
const url2 = "https://api.github.com/search/repositories?q=user:benhmaid";
const url3 = "https://api.github.com/search/repositories?q=user:amerdahabi";

const fetch1 = fetch(url1).then(response => response.json());
const fetch2 = fetch(url2).then(response => response.json());
const fetch3 = fetch(url3).then(response => response.json());

Promise.all([fetch1, fetch2, fetch3])
  .then(data => {
    console.log(data);
    renderData(data);
  })
  .catch(err => {
    // console.error("error");
  });

function renderData(data) {
  for (let i = 0; i < data.length; i++) {
    const newArray = data[i].items;
    //   console.log(newArray);
    //   console.log(newArray[0]);
    //   console.log(newArray[0].full_name);

    for (let j = 0; j < newArray.length; j++) {
      //console.log(newArray[j]);
      const ul = document.createElement("ul");
      const li = document.createElement("li");
      const fullname = newArray[j].full_name;
      //console.log(fullname);
      const url = newArray[j].url;
      const owner = newArray[j].owner.login;
      li.innerHTML = `full name : ${fullname} <br> url : ${url} <br> owner : ${owner}`;
      ul.appendChild(li);
      myList.appendChild(ul);
    }
  }
}
