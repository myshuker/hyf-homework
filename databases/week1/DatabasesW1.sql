
-- Note: 
-- I write here all the nams of columns as just the name without related it to his tables, just to know I can write it as that in the future coz its the first task for us
-- but for exaple : I can write instad of 
                                      -- :(Select title) => ( Select  task.title) 
                                      -- :(Select name) => ( Select  status.name)....etc

-- 1 Find out how many tasks are in the task table
Select count(*) 
from task ;

--2 Find out how many tasks in the task table do not have a valid due date
SELECT count(id) 
from task 
where due_date IS NULL;

--3 Find all the tasks that are marked as done
Select title, name  
from task  
inner join status on task.status_id = status.id
where name ='Done'

-- 4 Find all the tasks that are not marked as done
Select title, name  
from task  
inner join status on task.status_id = status.id
where name !='Done'
-- 5 Get all the tasks, sorted with the most recently created first
SELECT * 
from task ORDER BY created DESC;

-- 6 Get the single most recently created task
SELECT * 
FROM task ORDER by created DESC limit 0,1;

-- 7 Get the title and due date of all tasks where the title or description contains database
select title, due_date 
from task 
where title like '%database%' or description like '%database%';

-- 8 Get the title and status (as text) of all tasks
SELECT title, name  
FROM task INNER JOIN status 
ON task.status_id = status.id;

-- 9 Get the name of each status, along with a count of how many tasks have that status

SELECT  name , count(name)
FROM task 
INNER JOIN status 
on task.status_id = status.id
GROUP BY name;

-- 10 Get the names of all statuses, sorted by the status with most tasks first
SELECT name , count(name)
FROM task 
INNER JOIN status 
on task.status_id = status.id
GROUP BY name 
ORDER BY count(name) DESC;
