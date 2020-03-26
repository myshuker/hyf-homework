const jsonMeals = require("../data/meals.json");
const jsonReview = require("../data/reviews.json");

function getCheapMeals(req, res) {
  const reviewMeal = jsonMeals.map(item => {
    item.review = jsonReview.filter(element => {
      return (element.mealId == item.id);
    });
    return item;
  });
  const cheapMeal = jsonMeals.filter(meal => {
    return meal.price < 90;
  });
  res.json(cheapMeal);
}
module.exports = getCheapMeals;



