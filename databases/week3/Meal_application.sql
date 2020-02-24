-- create database meal_sharing:
CREATE DATABASE meal_sharing;
USE meal_sharing;
-- Create all the sql for creating this data model:
-- crate tables: 

--create meal table:
CREATE TABLE `meal`(
    `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar (255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar (255) NOT NULL,
  `meal_when` DATETIME NOT NULL,
  `max_reservation` int (10) unsigned NOT NULL,
  `price` decimal,
  `create_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create reservation table: 

CREATE TABLE `reservation`(
  `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
   `number_of_guests` int (10) unsigned NOT NULL,
  `meal_id` int (10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE 
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- create review table: 
CREATE TABLE `review`(
  `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar (255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `stars` int (10) unsigned NOT NULL,
  `meal_id` int (10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

                               --Queries :
                                --Meal :
-- Get all meals
select *
from meal;

--Add a new meal
 insert into `meal` (id, title, description, location, meal_when,max_reservation, price, created_date ) 
 values (1, 'meal1', 'meal1_description.', 'meal1_location', '2017-10-15 13:05:09' , 3, 99,'2017-10-15 13:05:09');
 
-- Get a meal with any id, fx 1
SELECT *
FROM meal
WHERE id = 4;

--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'meal01' , description = 'meal01_description.'
where id = 1;

-- Delete a meal with any id, fx 1
DELETE from meal where id =1;

                                --Reservation :
--Get all reservations
SELECT * from reservation;

--Add a new reservation

 insert into `reservation` (id, number_of_guests, meal_id, created_date) 
 values (1,'2', '2','2017-10-15 13:05:09');

--Get a reservation with any id, fx 1 
SELECT *  from reservation WHERE id = 1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE reservation 
SET number_of_guests = '5' , meal_id = '5'
where id = 1;

--Delete a reservation with any id, fx 1
DELETE from reservation where id =1;

                                --Review :

--Get all Review
SELECT * from review;

--Add a new reservation

 insert into `review` (id, title, description, stars, meal_id, created_date) 
 values (1,'review1', 'Review1_description','5','2','2017-10-15 13:05:09');

--Get a reservation with any id, fx 1 
SELECT *  from review WHERE id = 1;

--Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes

UPDATE review 
SET description = 'new_description' , meal_id = '5'
where id = 1;

--Delete a reservation with any id, fx 1
DELETE from review where id =1;


--Additional queries
--add a couple of different meals, reservations and reviews
-- meal
insert into `meal` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (2, 'meal2', 'meal2_description.', 'meal2_location', '2017-10-15 13:05:09' , 1, 599,'2017-10-15 13:05:09');
 insert into `meal` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (3, 'meal3', 'meal3_description.', 'meal3_location', '2017-10-15 13:05:09' , 5, 199,'2017-10-15 13:05:09');
 insert into `meal` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (4, 'meal4', 'meal4_description.', 'meal4_location', '2017-10-15 13:05:09' , 7, 69,'2017-10-15 13:05:09');
 insert into `meal` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (5, 'meal5', 'meal5_description.', 'meal5_location', '2017-10-15 13:05:09' , 2, 245,'2017-10-15 13:05:09');
 
 -- reservation

 insert into `reservation` (id, number_of_guests, meal_id, created_date) 
 values (2,'5', '2','2017-10-15 13:05:09');
 insert into `reservation` (id, number_of_guests, meal_id, created_date) 
 values (3,'4', '5','2017-10-15 13:05:09');
 insert into `reservation` (id, number_of_guests, meal_id, created_date) 
 values (4,'3', '4','2017-10-15 13:05:09');
 insert into `reservation` (id, number_of_guests, meal_id, created_date) 
 values (5,'1', '5','2017-10-15 13:05:09');
 -- review 


 insert into `review` (id, title, description, stars, meal_id, created_date) 
 values (2,'review2', 'Review2_description','2','3','2017-10-15 13:05:09');

 insert into `review` (id, title, description, stars, meal_id, created_date) 
 values (3,'review3', 'Review3_description','5','4','2017-10-15 13:05:09');

 insert into `review` (id, title, description, stars, meal_id, created_date) 
 values (4,'review4', 'Review4_description','3','1','2017-10-15 13:05:09');

 insert into `review` (id, title, description, stars, meal_id, created_date) 
 values (5,'review5', 'Review5_description','4','5','2017-10-15 13:05:09');


--Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal where price < 200

--Get meals that still has available reservations
/*
SELECT * FROM meal  WHERE max_reservation IS NOT NULL; // dont know if its correct...

-- or ....

SELECT meal.title , meal.max_reservations ,reservation.number_of_guests 
FROM reservation 
JOIN meal 
ON reservation.meal_id = meal.id
where reservation.number_of_guests < meal.max_reservations;
--
*/
SELECT  meal.*,
    SUM(reservation.number_of_guests) AS number_of_guests
FROM reservation
 JOIN meal 
 ON reservation.meal_id = meal.id
GROUP BY meal.id
HAVING SUM(reservation.number_of_guests) < meal.max_recervation ;

--Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal like '%Rød grød med%' ;

--Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2017-10-15 13:05:09' AND ' 2018-12-15 13:05:09'


-- Get only specific number of meals fx return only 5 meals
SELECT * from meal LIMIT 4 ;

--Get the meals that have good reviews
SELECT * FROM meal JOIN review  on meal.id = review.meal_id WHERE stars > 4;

--Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation JOIN meal on reservation.meal_id = meal.id where meal.id = 2 ORDER by created_date ;
(this ...Im not sure of it because I dont check it bout I will do that later)

-- Sort all meals by average number of stars in the reviews

SELECT * FROM meal JOIN review on meal.id = review.meal_id GROUP by stars ;
(this ...Im not sure of it because I dont check it bout I will do that later)
