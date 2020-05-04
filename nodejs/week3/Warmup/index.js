// Calculator

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1> Calculator : </h1>`);
});

( Note : I know this code is wrong, so I'm not sure about this task ....) 
 

//Calculator using :param

//Addition :
// syntax url : http://localhost:3000/numbers/add/first/4/second/5
app.get("/calculator/add/first/:num1/second/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const sum = num1 + num2;
  res.send(`${num1} + ${num2}  = ${sum}`);
});

//Subtraction :
// syntax url : http://localhost:3000/calculator/Sub/first/4/second/5
app.get("/calculator/Sub/first/:num1/second/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const sub = num1 - num2;
  res.send(`${num1} - ${num2}  = ${sub}`);
});

//Multiplication :
// syntax url : http://localhost:3000/calculator/multiply/first/4/second/5
app.get("/calculator/multiply/first/:num1/second/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const multiply = num1 * num2;
  res.send(`${num1} * ${num2}  = ${multiply}`);
});
//Multiplication :
// syntax url : http://localhost:3000/calculator/div/first/7/second/5
app.get("/calculator/div/first/:num1/second/:num2", (req, res) => {
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const Div = num1 / num2;
  res.send(`${num1} / ${num2}  = ${Div}`);
});

//Calculator using req.body
//Addition :
// syntax url : http://localhost:3000/numbers/add?first=7&swcond=5
app.get("/numbers/add", (req, res) => {
  const num1 = parseInt(req.query.first);
  const num2 = parseInt(req.query.second);
  const sum = num1 + num2;
  res.send(`${num1} + ${num2}  = ${sum}`);
});

//Subtraction :
// syntax url : http://localhost:3000/numbers/sub?first=7&swcond=5
app.get("/numbers/sub", (req, res) => {
  const num1 = parseInt(req.query.first);
  const num2 = parseInt(req.query.second);
  const sub = num1 - num2;
  res.send(`${num1} - ${num2}  = ${sub}`);
});

//Multiplication :
// syntax url : http://localhost:3000/numbers/multiply?first=7&swcond=5
app.get("/numbers/multiply", (req, res) => {
  const num1 = parseInt(req.query.first);
  const num2 = parseInt(req.query.second);
  const multiply = num1 * num2;
  res.send(`${num1} * ${num2}  = ${multiply}`);
});

//Division :
// syntax url : http://localhost:3000/numbers/div?first=7&swcond=5
app.get("/numbers/div", (req, res) => {
  const num1 = parseInt(req.query.first);
  const num2 = parseInt(req.query.second);
  const div = num1 / num2;
  res.send(`${num1} / ${num2}  = ${div}`);
});

const port = 3000;
app.listen(port, () => { console.log(`Server is Starting on port : ${port}`)});


