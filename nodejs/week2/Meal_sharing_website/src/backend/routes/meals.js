const express = require("express");
const router = express.Router();
const jsonMeals = require("../data/meals.json");

function getMeals(req, res) {
  const idString = req.params.id;
  const id = parseInt(idString);
  const max_price = parseInt(req.query.maxPrice);
  const title = req.query.title;
  const createdAfter = req.query.createdAfter;
  const limit = parseInt(req.query.limit);

  if (id) {
    if (id === 0 || id > jsonMeals.length)
      res.status(404).send(`The item with id: ${id} was not found`);
    const data = jsonMeals.filter(item => {
      if (item.id === id) {
        return item;
      }
    });

    // console.log(data);
    res.json(data);
  } else if (idString) {
    console.log(typeof idString);
    res.send(`Id it should be a number`);
  } else if (max_price) {
    const dataPrice = jsonMeals.filter(item => {
      return item.price < max_price;
    });
    res.json(dataPrice);
  }
  else if (title) {
    const meal_title = jsonMeals.filter(item => {
      return item.title.toLowerCase() === title.toLowerCase();
    });
    res.json(meal_title);
  }
    else if (createdAfter) {
    const meal_created_after = jsonMeals.filter(item => {
      return item.createdAt > createdAfter;
    });
    res.json(meal_created_after);
  }

  else if (limit) {
    const meal_limit = jsonMeals.slice(limit)
    res.json(meal_title);
    }


  else if (!id) {
    res.json(jsonMeals);
  }
}

router.get("/", getMeals);
router.get("/:id", getMeals);

module.exports = router;

//function getMeals(req, res) {

// const id = parseInt(req.params.id);
// const data = jsonMeals.find(item => item.id === id);

// // if(id || data){
//   if (id === 0 || id > jsonMeals.length)
//   res.status(404).send(`The item with id: ${id} was not found`);
//   else if (!data) res.json(jsonMeals);

//   res.json(data);

//   const dataPrice = jsonMeals.filter(item => {
//     const max_price = parseInt(req.query.maxPrice);
//     return item.price < max_price

//     });
// res.json(dataPrice)
//   }

// }
