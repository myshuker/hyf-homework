
// I'm still working on this task
// here I call all the action in HTML page
const input = document.getElementById('inputText');
//const btn = document.querySelector('#startBtn');
const btn = document.getElementById('startBtn');
const str = document.getElementById('restart');
const btnS = document.getElementById('pressS');
const btnL = document.getElementById('pressL');
const outS = document.getElementById('outputS');
const outL = document.getElementById('outputL');

// here I add action to the Start button
function inputValue(){
    input.value ;
    if (isNaN(input.value) || input.value == 0) {
        alert('Please set a time to Start');
    }else {





    }



    
    
    
    
    
    
    const counterS = function () {
      return outputS.innerHTML 
    }

    const counterL = function () {
        return outputL.innerHTML 
      }
      
    
    btnS.addEventListener('keypress', counterS)
    btnL.addEventListener('keypress', counterL)

}
btn.addEventListener('click', inputValue)




const counter = function(){

    console.log('The Winner is' );
}
setTimeout(counter , input.value*1000); 