// homework js3 week3

// Note : in this task I made all the parts separately as if every part task alone .... so I can understand the procedures in the future

// 1- Paint a circle to a canvas element
 
const canvas = document.getElementById("canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
  ctx.beginPath();
  ctx.arc(200, 200, 100, 0, 2 * Math.PI);

  // draw the outline
  ctx.lineWidth = 10;
  ctx.strokeStyle = "blue";
  ctx.stroke();

  // to fill the circle
  ctx.fillStyle = "red";
  ctx.fill();
} else {
  console.log("<canvas> unsupported");
} 

//2- Class creation time!

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    // drawing code here
    ctx.beginPath();
    ctx.arc(this.x, this.y,this.r,this.startAngle, this.endAngle, this.fillColor  );

    // draw the outline
    ctx.stroke();

    // to fill the circle
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
const c2 = new Circle(100, 100, 40, 0, 2 * Math.PI, "#b00e41");
c1.draw();
c2.draw(); 


// 3- Now lets make art!

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    // drawing code here
    ctx.beginPath();
    ctx.arc( this.x,  this.y,this.r, this.startAngle, this.endAngle, this.fillColor );
    // draw the outline
    ctx.stroke();

    // to fill the circle
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

setInterval(() => {                           //  aleksd-commant:  getRandomInteger(max) can help you reuse and keep the code shorter
  const random1 = Math.floor(Math.random() * 400);
  const random2 = Math.floor(Math.random() * 400);
  const xRandom = random1;
  const yRandom = random2;
  const rRandom = Math.floor(Math.random() * 50);
  //const fillRandom = 'x2'+'y2'+'z2'
  const fillRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(fillRandom);
   
  const c = new Circle(xRandom, yRandom, rRandom, 0, 2 * Math.PI, fillRandom);
  c.draw();
},500); 
 

// optional

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//Getting the Mouse Position
//Listening for the Mouse Event
let  canvasPos = getPosition(canvas);
let mouseX = 0;
let mouseY = 0;
canvas.addEventListener("mousemove", setMousePosition, false);
 
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    // drawing code here
    ctx.beginPath();
    ctx.arc( this.x,  this.y,this.r, this.startAngle, this.endAngle, this.fillColor );
    // draw the outline
    ctx.stroke();

    // to fill the circle
    ctx.fillStyle = this.fillColor;
    ctx.fill();
  }
}

function setMousePosition(e) {
  mouseX = e.clientX - canvasPos.x;
  mouseY = e.clientY - canvasPos.y;
  
     const random1 = Math.floor(Math.random() * 400);
    const random2 = Math.floor(Math.random() * 400);
    const xRandom = random1;
    const yRandom = random2;
    const rRandom = Math.floor(Math.random() * 50);
    //const fillRandom = 'x2'+'y2'+'z2'
    const fillRandom = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log(fillRandom);
     
    const c = new Circle(mouseX, mouseY, rRandom, 0, 2 * Math.PI, fillRandom);
    c.draw();
  } 
  

//Getting the Exact Mouse Position

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}       

