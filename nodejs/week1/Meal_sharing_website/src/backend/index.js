const express = require("express");
const app = express();

const getAllMeals = require("./routes/meals");
app.get("/meals", getAllMeals);

// const getCheapMeals = require("./routes/cheap-meals");
// app.get("/cheap-meals", getCheapMeals);

// const getLargeMeals = require("./routes/large-meals");
// app.get("/large-meals", getLargeMeals);
 
// const getRandomMeal = require("./routes/meal");
// app.get("/meal", getRandomMeal);

//  const getAllReservations = require("./routes/reservations");
// app.get("/reservations", getAllReservations);

// const getRandomReservation = require("./routes/reservation");
// app.get("/reservation", getRandomReservation);

app.listen(3000, listening);

function listening() {
  console.log("Server is Starting");
}
