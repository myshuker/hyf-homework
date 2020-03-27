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





/* 
// new way to solve it 
const jsonMeals = require("../data/meals.json");
const jsonReview = require("../data/reviews.json");

const getCheapMeal = (req, res) => {
  const cheap_meal = jsonMeals.filter(meal => meal.price < 70);

  const mealReviews = cheap_meal.map(meal => {
    return {
      ...meal,
      review: jsonReview.filter(review => review.mealId === meal.id)
    };
  });
  res.json(mealReviews);
};

module.exports = getCheapMeal;
 */
