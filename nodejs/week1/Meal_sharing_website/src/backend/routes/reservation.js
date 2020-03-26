const reservations = require("../data/reservations.json");

const randomReservation = function(req, res) {
  let randomReservationNumber = Math.floor(Math.random() * reservations.length);
  const randomReservation = reservations[randomReservationNumber];

  res.json(randomReservation);
};

module.exports = randomReservation;
