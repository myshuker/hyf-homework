
drop DATABASE IF EXISTS db_meals_app;
CREATE DATABASE IF NOT EXISTS db_meals_app;
USE db_meals_app;


CREATE TABLE `meals`(
    `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar (255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar (255) NOT NULL,
  `meal_when` DATETIME NOT NULL,
  `max_reservation` int (10) unsigned NOT NULL,
  `price` decimal,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `reservations`(
  `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
   `number_of_guests` int (10) unsigned NOT NULL,
  `meal_id` int (10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE 
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reviews`(
  `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar (255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `stars` int (10) unsigned NOT NULL,
  `meal_id` int (10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 
--Add a new meal
 insert into `meals` (id, title, description, location, meal_when,max_reservation, price, created_date ) 
 values (1, 'meal1', 'meal1_description.', 'meal1_location', '2017-10-15 13:05:09' , 3, 99,'2017-10-15 13:05:09');
 
--Add a new reservation

 insert into `reservations` (id, number_of_guests, meal_id, created_date) 
 values (1,'2', '2','2017-10-15 13:05:09');

--Add a new reservation

 insert into `reviews` (id, title, description, stars, meal_id, created_date) 
 values (1,'review1', 'Review1_description','5','2','2017-10-15 13:05:09'); 



-- meals
insert into `meals` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (2, 'meal2', 'meal2_description.', 'meal2_location', '2017-10-15 13:05:09' , 1, 599,'2017-10-15 13:05:09');
 insert into `meals` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (3, 'meal3', 'meal3_description.', 'meal3_location', '2017-10-15 13:05:09' , 5, 199,'2017-10-15 13:05:09');
 insert into `meals` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (4, 'meal4', 'meal4_description.', 'meal4_location', '2017-10-15 13:05:09' , 7, 69,'2017-10-15 13:05:09');
 insert into `meals` (id, title, description, location, meal_when, max_reservation, price, created_date ) 
 values (5, 'meal5', 'meal5_description.', 'meal5_location', '2017-10-15 13:05:09' , 2, 245,'2017-10-15 13:05:09');
 
 -- reservations

 insert into `reservations` (id, number_of_guests, meal_id, created_date) 
 values (2,'5', '2','2017-10-15 13:05:09');
 insert into `reservations` (id, number_of_guests, meal_id, created_date) 
 values (3,'4', '5','2017-10-15 13:05:09');
 insert into `reservations` (id, number_of_guests, meal_id, created_date) 
 values (4,'3', '4','2017-10-15 13:05:09');
 insert into `reservations` (id, number_of_guests, meal_id, created_date) 
 values (5,'1', '5','2017-10-15 13:05:09');
 -- review 


 insert into `reviews` (id, title, description, stars, meal_id, created_date) 
 values (2,'review2', 'Review2_description','2','3','2017-10-15 13:05:09');

 insert into `reviews` (id, title, description, stars, meal_id, created_date) 
 values (3,'review3', 'Review3_description','5','4','2017-10-15 13:05:09');

 insert into `reviews` (id, title, description, stars, meal_id, created_date) 
 values (4,'review4', 'Review4_description','3','1','2017-10-15 13:05:09');

 insert into `reviews` (id, title, description, stars, meal_id, created_date) 
 values (5,'review5', 'Review5_description','4','5','2017-10-15 13:05:09');

