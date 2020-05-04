const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");

function allReservations(req, res) {
  const id = parseInt(req.params.id);
  if (id) {
    if  (id == 0 || id > reservations.length ) {
      // res.send(reservations.length);
      res.status(404).send(`The item with id: ${id} was not found`);
    } 
    else  {
    const data = reservations.filter(item => {
      if (item.id === id) return item;
    });
    // console.log(data);
    res.json(data);
  }
  
  } 
  else if (!id) {
    res.json(reservations);
  }
}

router.get("/", allReservations);
router.get("/:id", allReservations);

module.exports = router;


//or
const jsonReservations = require("../data/reservations.json");
// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json(jsonReservations);
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   // res.send(id)
//   const reservationBYId = jsonReservations.filter(
//     reservation => reservation.id == id
//   );
//   res.json(reservationBYId);
// });

// module.exports = router;

