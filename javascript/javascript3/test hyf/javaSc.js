//console.log('hey'); this is just  to test my js file

//1. (Main theme: Programming Basics)

let numbers = []; // this is an array to put all the number inside it

//Write a function that logs to the console numbers 1 to 100.
function counter() {
  for (let i = 1; i <= 100; i++) {
    numbers[i] = i;
  }
}
counter();
console.log(numbers);

//  if the number is divisible by 3
for (let i = 1; i <= 100; i++) {
  if (numbers[i] % 3 === 0) {
    console.log("This is divisible by 3");
  }
}

// If it's divisible by 5
for (let i = 1; i <= 100; i++) {
  if (numbers[i] % 5 === 0) {
 
    console.log("This is divisible by 5")
  }
}
//   If it's divisible by both 3 and 5
for (let i = 1; i <= 100; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log("JackPots");
  }
}
 

// or  another way 
let numbers = [];
function counter() {
  for (let i = 1; i <= 100; i++) {
  
console.log(i);
if (i % 3 == 0 && i % 5 == 0) {
console.log('Jackpot!');
} else if (i % 3 === 0) {
  console.log('​ This is divisible by 3');

} else if (i % 5 == 0) {
  console.log('This is divisible by 5');
}
}
}
counter();



// 2. (Main theme: DOM manipulation)
// 
const imgLocation = document.getElementById("imgPlace");
const btnLocation = document.getElementById("btnLocation");

// create button and add it inside html page
const btn = document.createElement("button");
btn.innerHTML = " click me";
btnLocation.appendChild(btn);

// make function to  bring a random image  
let i = 0;
function imgAdded() {
  // counter way
  //   i += 1;
  //   const url = `https://picsum.photos/id/${i}/400/400`

  // or math random number way but I prefer this way
  let randomNuumber = Math.ceil(Math.random() * 100);
  //console.log(randomNuumber);

  const url = `https://picsum.photos/id/${randomNuumber}/400/400`;
  // create a image and add it to the html page
  const img = document.createElement("img");
  img.src = url;
  imgLocation.appendChild(img);
}

btn.addEventListener("click", imgAdded); //When the button is clicked, it will insert an <img> tag to the html with a random image.



// 3. (Main theme: Async API calls)

let username1 = document.getElementById("user1");
let username2 = document.getElementById("user2");
let username3 = document.getElementById("user3");
// 
    const url = 'https://reqres.in/api/users'
    fetch(url)
    .then(response => response.json())
     .then(data => {
       console.log(data)
    const  firstName = data.data[0].first_name
    const  secondName = data.data[1].first_name
    const  thirdName = data.data[2].first_name
    console.log(firstName);
    console.log(secondName);
    console.log(thirdName);

    username1.innerHTML = firstName;
    username2.innerHTML = secondName;
    username3.innerHTML = thirdName;
})


