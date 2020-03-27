const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send(`
    <body>
        <h1>Home Page</h1>
     </body>
  `);
});

app.get("/numbers/add?", function(req, res) {
  const first = Number(req.query.first);
  const second = Number(req.query.second);
  console.log(req.query);
  // res.send(req.query)

  res.send(`
    <h1>Home Page</h1>
    <h1>sum:</h1>  
     <h2> ${first} + ${second} = ${first + second} </h2>
    `);
});

app.get("/numbers/multiply/:first/:second", function(req, res) {
  const first = req.params.first;
  const second = req.params.second;
  res.send(`
    <h1>Calculator Page</h1>
    <h1>multiply:</h1>  
     <h2> ${first} * ${second} = ${first * second} </h2>
    `);
});

const listen = () => console.log(`server run in port : ${port}`);

app.listen(port, listen);

