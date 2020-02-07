

-- Create a new database 
create database School_database;

-- use database :
 use School_database; 
 
 -- create tables:
-- Class: with the columns: id, name, begins (date), ends (date) 


 create table Class(
id   int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar(255) NOT NULL, 
begins_date DATETIME NOT NULL, 
ends_date DATETIME NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Student: with the columns: id, name, email, phone, class_id (foreign key)

create table Student(
 id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name varchar(255) NOT NULL, 
 email varchar(255) NOT NULL, 
 phone varchar(255) NOT NULL, 
 class_id int(10) unsigned NOT NULL,
 CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `Class`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

