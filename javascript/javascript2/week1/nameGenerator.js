// Spirit animal name generator

const p = document.querySelector("p"); // grab the p element where show the name appear
const input = document.getElementById("inputName"); // grab the input text
const btn = document.querySelector("button"); // grab the btn

// make a function  that will return the input name
function clickOne(){
  const inputText = input.value;
  //console.log((input.value));
  if (inputText !== ""){                   // if the input wasn't empty
     // p.textContent = inputText + "-" + item;
    
     const newName =   p.textContent       // New spirit animal

      p.textContent = (`${inputText} - ${item} `) ;





} else {                                      // if the input was empty
  p.textContent = ("Please Write Your Name")
}
}

btn.addEventListener("click", clickOne);

// Spirit animal part
// create an array of  Spirit animal names
const spiritAnimalList = [
  "Falcon",
  "Deer",
  "Owl",
  "Snake",
  "Woodpecker",
  "Alligator",
  "Bat",
  "Buffalo",
  "Spider",
  "Sheep"
];
let item =
  spiritAnimalList[Math.floor(Math.random() * spiritAnimalList.length)]; // create a random item from the array
// console.log(item);  // test it  :wink:
