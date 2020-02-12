

-- Create a new database 
create database school_database;

-- use database :
use school_database;

-- create tables:
-- Class: with the columns: id, name, begins (date), ends (date) 


create table class
(
    id int(10)
    unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY, 
name varchar
    (255) NOT NULL, 
begins_date DATETIME NOT NULL, 
ends_date DATETIME NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    -- Student: with the columns: id, name, email, phone, class_id (foreign key)

    create table student
    (
        id int(10)
        unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name varchar
        (255) NOT NULL, 
 email varchar
        (255)UNIQUE NOT NULL , 
 phone varchar
        (255) NOT NULL, 
 class_id int
        (10) unsigned NOT NULL,
 CONSTRAINT `fk_class` FOREIGN KEY
        (`class_id`) REFERENCES `class`
        (`id`) ON
        DELETE CASCADE ON
        UPDATE CASCADE
)ENGINE=InnoDB
        DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



        -- add classes:
        insert into class
            (id, name, begins_date, ends_date)
        values
            (1, 'Class1', '2017-01-25' , '2017-10-15' );
        insert into class
            (id, name, begins_date, ends_date)
        values
            (2, 'Class2', '2017-01-25' , '2017-10-15' );
        insert into class
            (id, name, begins_date, ends_date)
        values
            (3, 'Class3', '2017-01-25' , '2017-10-15' );
        insert into class
            (id, name, begins_date, ends_date)
        values
            (4, 'Class4', '2017-01-25' , '2017-10-15' );

        -- add student 
        insert into student
            (id, name, email, phone, class_id )
        values
            (1, 'pero soso', 'pero@gmail.com', '483-396-8795', 1);
        insert into student
            (id, name, email, phone, class_id)
        values
            (2, 'dado isis', 'dado@gmail.com', '635-572-8467', 2);
        insert into student
            (id, name, email, phone, class_id)
        values
            (3, 'Pablo Koso', 'palo@gmail.com', '790-962-8683', 1);
        insert into student
            (id, name, email, phone, class_id)
        values
            (4, 'Mero Soro', 'mero@gmail.com', '646-743-6191', 3);
        insert into student
            (id, name, email, phone, class_id)
        values
            (5, 'Horo Foro', 'heo@gmail.com', '302-678-7931', 3);
        insert into student
            (id, name, email, phone, class_id)
        values
            (6, 'gogo were', 'gogo@gmail.com', '251-524-6594', 2);


        -- Create an index on the name column of the student table.
        CREATE INDEX index_name ON Student (name);



        -- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).

        alter table class
add status ENUM
        ('not-started', 'ongoing', 'finished') NOT NULL;
after ends_date ;

