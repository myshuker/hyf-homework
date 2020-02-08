

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

-- Create an index on the name column of the student table.

-- add classes:
insert into Class (id, name, begins_date, ends_date) values (1, 'Class1', '2017-01-25' , '2017-10-15' );
insert into Class (id, name, begins_date, ends_date) values (2, 'Class2', '2017-01-25' , '2017-10-15' );
insert into Class (id, name, begins_date, ends_date) values (3, 'Class3', '2017-01-25' , '2017-10-15' );
insert into Class (id, name, begins_date, ends_date) values (4, 'Class4', '2017-01-25' , '2017-10-15' );

-- add student 
insert into Student (id, name, email, phone, class_id ) values (1, 'pero soso', 'pero@gmail.com', '483-396-8795',1);
insert into Student (id, name, email, phone, class_id) values (2, 'dado isis', 'dado@gmail.com', '635-572-8467', 2);
insert into Student (id, name, email, phone, class_id) values (3, 'Pablo Koso', 'palo@gmail.com', '790-962-8683', 1);
insert into Student (id, name, email, phone, class_id) values (4, 'Mero Soro', 'mero@gmail.com', '646-743-6191', 3);
insert into Student (id, name, email, phone, class_id) values (5, 'Horo Foro', 'heo@gmail.com', '302-678-7931', 3);
insert into Student (id, name, email, phone, class_id) values (6, 'gogo were', 'gogo@gmail.com', '251-524-6594', 2);


-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

-- first create status table:
CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- add a new column to the class table :
alter table Class
add status_id int(10) unsigned not null
after ends_date ;

-- add rows to status table:
insert into status (id, name) values (1, 'not-started');
insert into status (id, name) values (2, 'ongoing');
insert into status (id, name) values (3, 'finished');

-- to show what we add :
select * 
from status;


