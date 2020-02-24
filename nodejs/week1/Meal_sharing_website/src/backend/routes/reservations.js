const reservations = require("../data/reservations.json");

function allReservations(req, res) {
  res.json(reservations);
}

module.exports = allReservations;
