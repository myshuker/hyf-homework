-- create database meal_sharing:
create database meal_sharing;
use meal_sharing;
-- Create all the sql for creating this data model:
-- crate tables: 

--create meal table:
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `meal_when` DATETIME NOT NULL,
  `max_recervation` int(10) unsigned NOT NULL,
  `price` decimal,
  `create_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 -- create reservation table: 

 CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
  -- create review table: 
   CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `stars` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
 
 -- add meals:
 insert into `meal` (id, title, description, location, meal_when, max_recervation, price, created_date ) 
 values (1, 'meal1', 'meal1_description.', 'meal1_location', '2017-10-15 13:05:09' , 3, 99,'2017-10-15 13:05:09');
insert into `meal` (id, title, description, location, meal_when, max_recervation, price, created_date ) 
 values (2, 'meal2', 'meal2_description.', 'meal2_location', '2017-10-15 13:05:09' , 1, 599,'2017-10-15 13:05:09');
 insert into `meal` (id, title, description, location, meal_when, max_recervation, price, created_date ) 
 values (3, 'meal3', 'meal3_description.', 'meal3_location', '2017-10-15 13:05:09' , 5, 199,'2017-10-15 13:05:09');
 insert into `meal` (id, title, description, location, meal_when, max_recervation, price, created_date ) 
 values (4, 'meal4', 'meal4_description.', 'meal4_location', '2017-10-15 13:05:09' , 7, 69,'2017-10-15 13:05:09');
 insert into `meal` (id, title, description, location, meal_when, max_recervation, price, created_date ) 
 values (5, 'meal5', 'meal5_description.', 'meal5_location', '2017-10-15 13:05:09' , 2, 245,'2017-10-15 13:05:09');
 
