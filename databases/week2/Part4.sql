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
  `when` DATETIME NOT NULL,
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
 
 