// I'm still working on this task

// here I call all the action in HTML page
const input = document.getElementById("inputText");
//const btn = document.querySelector('#startBtn');
const btn = document.getElementById("startBtn");
const str = document.getElementById("restart");
const btnS = document.getElementById("pressS");
const btnL = document.getElementById("pressL");
let outS = document.getElementById("outputS");
let outL = document.getElementById("outputL");
let outMsgS = document.getElementById('outMsgS');
let outMsgL = document.getElementById('outMsgL');


// Here I print the result on theirs places

// here I add action to the Start button
function inputValue() {
  btn.disabled = true;
  input.disabled = true;

           
  let countS = 0;
  let countL = 0;

  
  if (isNaN(input.value) || input.value == 0) {
      alert("Please set a time to Start");
    } else {
        
        document.addEventListener("keypress", counter);
        function counter(event) {
            // make counter for keys S, L            
            outS.innerHTML = countS;
            outL.innerHTML = countL;
            
            if (event.code == "KeyS") {
                countS = countS + 1;
            } else if (event.code == "KeyL") {
                countL = countL + 1;
            }             
            
        }
        
        setTimeout(() => {


      /* btnS.addEventListener("keypress", counterS);
      outS.innerHTML = countS;
      btnL.addEventListener("keypress", counterL);
      outL.innerHTML = countL;
       */

      if (countS < countL) {
        outMsgL.innerHTML = "You Are The Winner ";
        outMsgS.innerHTML = "You Are The Loser ";
      } else if (countS > countL) {
        outMsgL.innerHTML = "You Are The Winner ";
        outMsgS.innerHTML = "You Are The Loser ";
    } else if (countS = countL) {
        alert(" No Winner Try Again");
        btn.disabled = false;

      }
    }, input.value * 1000);
  }

  const counterS = function() {
    return countS;
  };

  const counterL = function() {
    return countL;
  };
}
btn.addEventListener("click", inputValue);

/* 
const counter = function() {
  console.log("The Winner is");
}; */

// reset the game
function restart(event) {
  // event.stopPropagation();
  //event.preventDefault()
  location.href = "";
}
str.addEventListener("click", restart);
