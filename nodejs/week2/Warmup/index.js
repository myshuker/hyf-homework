const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`<h1>Hello World</h1>`);
});

app.get("/numbers/add", (request, response) => {
  let num1 = parseInt(request.query.first);
  let num2 = parseInt(request.query.second);
  let sum = num1 + num2;
  response.send(`${num1} + ${num2}  = ${sum}`);
});

app.get("/numbers/multiply/:num1/:num2", (request, response) => {
  let num1 = Number(request.params.num1);
  let num2 = Number(request.params.num2);
  let multiply = num1 * num2;
  response.send(`${num1} * ${num2}  = ${multiply}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is Starting on port : ${port}`);
});

