const express = require("express");
const router = express.Router();
const jsonReview = require("../data/reviews.json");

function getReviews(req, res) {
  const id = parseInt(req.params.id);
  const data = jsonReview.find(item => item.id === id);
  if (id === 0 || id > jsonReview.length)
    res.status(404).send(`The item with id: ${id} was not found`);
  // if (req.params.id === isNaN) res.status(404).send(`The item with id: ${id} was not found`);
  if (!data) res.json(jsonReview);

  res.json(data);
}

router.get("/", getReviews);
router.get("/:id", getReviews);

module.exports = router;


// or solution in another way

// function getReviews(req, res) {
//   const id = parseInt(req.params.id);
//   if (id) {
//     const data = jsonReview.filter(item => {
//       return item.id === id;
//     });
//     // console.log(data);
//     res.json(data);
//   } else {
//     res.json(jsonReview);
//   }
// }
// module.exports = getReviews;


// or 
const jsonReviews = require("../data/reviews.json");
// const express = require("express");
// const router = express.Router();

// router.get("/", (req, res) => {
//   res.json(jsonReviews);
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   // res.send(id)
//   const reviewsById = jsonReviews.filter(review => review.id == id);
//   res.json(reviewsById);
// });

// module.exports = router;

