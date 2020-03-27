const jsonMeals = require("../data/meals.json");
const jsonReview = require("../data/reviews.json");

const getLargeMeals = (req, res) => {
  
 const lotsOfPeople = jsonMeals.filter(meal => meal.maxNumberOfGuests > 5);
  const mealReviews = lotsOfPeople.map(meal => {
    return {
      ...meal,
      review: jsonReview.filter(review => review.mealId === meal.id)
    };
  });
  res.json(mealReviews);
};


module.exports = getLargeMeals;
 






// const jsonMeals = require("../data/meals.json");
// const jsonReview = require("../data/reviews.json");

// const getLargeMeals = function(req, res) {
//   const largMealReview = jsonMeals.map(data => {
//     data.review ==
//       jsonReview.filter(review => {
//         return data.id == review.mealId;
//       });

//     return data;
//   });

//   const largMealGuest = jsonMeals.filter(meal => {
//     if (meal.maxNumberOfGuests > 5) {
//       return meal;
//     }
//   });

//   res.json(largMealGuest);
// };

// module.exports = getLargeMeals;



