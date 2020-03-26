const jsonMeals = require("../data/meals.json");
const jsonReview = require("../data/reviews.json");

const getRandomMeals = (req, res) => {
  const randomNumber = Math.ceil(Math.random() * jsonMeals.length);
  const randomMeal = jsonMeals[randomNumber];

  randomMeal.review = jsonReview.filter(review => {
    if (review.mealId === randomMeal.id) {
      return review;
    } else {
      return;
    }
  });

  res.json({ randomMeal });
};

module.exports = getRandomMeals;
