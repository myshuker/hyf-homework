const jsonMeals = require("../data/meals.json");
const jsonReview = require("../data/reviews.json");

function getMeals(req, res) {
  const reviewMatchId = jsonMeals.forEach(item => {
    item.review = [];
    jsonReview.forEach(element => {
      if (item.id == element.mealId) {
        item.review.push(element);
      }
    });
  });

  res.json(jsonMeals);
}

module.exports = getMeals;
