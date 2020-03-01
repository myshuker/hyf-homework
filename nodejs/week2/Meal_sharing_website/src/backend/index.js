const express = require("express");
const app = express();

const getAllMeals = require("./routes/meals");
const getAllReservations = require("./routes/reservations");
const getAllReviews = require("./routes/reviews");
 
// create middleware
app.use((req, res, next) => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();
  const today = `${year}-${month}-${day} ${hour}:${min} request received for path:${req.path}`;
  console.log(today);

  req.next();
}); 

app.use("/meals", getAllMeals);
app.use("/api/meals", getAllMeals);
app.use("/reservations", getAllReservations);
app.use("/reviews", getAllReviews);

const port = 4000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/* const express = require("express");
const app = express();

// -1
const getAllMealsId = require("./routes/meals");
app.get("/meals/:id", getAllMealsId);

// -2
const getAllMeals = require("./routes/meals");
app.get("/meals", getAllMeals);

// -3
const getAllReservationsId = require("./routes/reservations");
app.get("/reservations/:id", getAllReservationsId);

// -4
const getAllReservations = require("./routes/reservations");
app.get("/reservations", getAllReservations);

// -5
const getAllReviewsId = require("./routes/reviews");
app.get("/reviews/:id", getAllReviewsId);

// -6
const getAllReviews = require("./routes/reviews");
app.get("/reviews", getAllReviews);

// const port = process.env.PORT || 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
 */
