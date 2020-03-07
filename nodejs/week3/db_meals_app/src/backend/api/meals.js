const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.route("/")
  .get((request, response) => {
    const query = pool.query("SELECT * FROM meals", (error, results, fields) => {
        if (error) {
          response.status(404).json({
            msg: "Check Query",
            Query: query.sql
          });
        }
        console.log("Query :", query.sql);
        response.send(results);
      }
    );
  })

  .post((request, response) => {
    //  const meal = new meal(request.body)
    const {title, description, location, meal_when, max_reservation, price, created_date} = request.body;
    const meal = {
      title: title,
      description: description,
      location: location,
      meal_when: meal_when,
      max_reservation: max_reservation,
      price: price,
      created_date: created_date
    };
    const query = pool.query("INSERT INTO meals SET ?", meal,(error, results, fields) => {
        if (error) {
          response.status(404).json({
            msg: "There are error please check Query",
            Query: query.sql
          });
        }
        response.status(201).json(results);
      }
    );
  })
  .get((request, response) => {
    const maxPrice = Number(request.query.maxPrice);
    const availableReservations = request.query.availableReservations;
    const title = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = Number(request.query.limit);
    
    if (maxPrice) {
      const query = pool.query("SELECT * FROM meals where price < ? ", maxPrice, function(error, results, fields) {
          if (error) {
            throw error;
          }
          response.json(results);
        }
      );
    }  else if (title) {
      const query = pool.query("SELECT * FROM meals where title like ? ", title,function(error, results, fields) {
          if (error) {
            throw error;
          }
          response.json(results);
        }
      );
    } else if (createdAfter) {
      const query = pool.query("SELECT * FROM meals where created_date > ? ", createdAfter,function(error, results, fields) {
          if (error) {
            throw error;
          }
          response.json(results);
        }
      );
    } else if (limit) {
      const query = pool.query("SELECT * FROM meals limit ? ", limit,function(error, results, fields) {
          if (error) {
            throw error;
          }
          response.json(results);
        }
      );
    } 




  });


router.route("/:id")
      .get((request, response) => {
        const id = parseInt(request.params.id);
        const query = pool.query("SELECT * FROM meals where id ?", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(`meal with id : ${id} Added` );
          }
        );
      })
      .put((request, response) => {
        const id = parseInt(request.params.id);
        const query = pool.query("UPDATE mealS SET title = 'new_name_meal'  WHERE id = ? ", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` meal with id : ${id} Updated` );
          }
        );
      })
      .delete((request, response) => {
        const id = parseInt(request.params.id);
        const query = pool.query("DELETE FROM meals where id ?", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` meal with id : ${id} Removed` );
          }
        );
      })




module.exports = router;
