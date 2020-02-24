const jsonMeals = require("../data/meals.json");
const jsonReview = require("../data/reviews.json");

const getMeal = function(req, res) {
  let randomMealNumber = Math.floor(Math.random() * jsonMeals.length);
  const randomMeal = jsonMeals[randomMealNumber];
  const x = randomMeal.id;

  const randomMealReview = jsonReview.filter(review => {
    if (randomMeal.id == review.mealId) {
      return review;
    }
  });
  // const randomMealWithReview =
  res.json([randomMeal, randomMealReview]);
};

module.exports = getMeal;
