const jsonMeals = require("../data/meals.json");
const express = require("express");
const router = express.Router();

const getMeal = (req, res) => {
  const id = req.params.id;
  const maxPrice = req.query.maxPrice;
  const title = req.query.title;
  const createdAfter = req.query.createdAfter;
  const limit = req.query.limit;
  // res.send(id)
  if (id) {
    const mealById = jsonMeals.filter(meal => meal.id == id);
    res.json(mealById);
  } else if (maxPrice) {
    const mealsByMaxPrice = jsonMeals.filter(meal => meal.price < maxPrice);
    res.json(mealsByMaxPrice);
  } else if (title) {
    const splitTitle = title.split(" ");
    console.log(splitTitle);
    const mealsByTitle = jsonMeals.filter(meal => {
      if (meal.title.include(splitTitle)) return meal;
    });
    res.json(mealsByTitle);
  } else if (createdAfter) {
    const mealsByCreatedAfter = jsonMeals.filter(
      meal => meal.createdAt > createdAfter
    );
    res.json(mealsByCreatedAfter);
  } else if (limit) {
    const mealsByLimit = jsonMeals.slice(0, limit);
    res.json(mealsByLimit);
  } else {
    res.json(jsonMeals);
  }
};

router.get("/", getMeal);
router.get("/:id", getMeal);

module.exports = router;
