const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.route("/")
  .get((request, response) => {
    const query = pool.query("SELECT * FROM reviews", (error, results, fields) => {
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
    const review = {
      title: title,
      description: description,
      location: location,
      meal_when: meal_when,
      max_reservation: max_reservation,
      price: price,
      created_date: created_date
    };
    const query = pool.query("INSERT INTO reviews SET ?", review,(error, results, fields) => {
        if (error) {
          response.status(404).json({
            msg: "There are error please check Query",
            Query: query.sql
          });
        }
        response.status(201).json(results);
      }
    );
  });

router.route("/:id")
      .get((request, response) => {
        const id = request.params.id;
        const query = pool.query("SELECT * FROM reviews where id ?", id,(error, results, fields) => {
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
        const id = request.params.id;
        const query = pool.query("UPDATE reviews SET title = 'new_name_review'  WHERE id = ? ", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` review with id : ${id} Updated` );
          }
        );
      })
      .delete((request, response) => {
        const id = request.params.id;
        const query = pool.query("DELETE FROM reviews where id ?", id,(error, results, fields) => {
            if (error) {
              response.status(404).json({
                msg: "Check Query",
                Query: query.sql
              });
            }
            console.log("Query :", query.sql);
            response.status(201).send(` review with id : ${id} Removed` );
          }
        );
      })


module.exports = router;
